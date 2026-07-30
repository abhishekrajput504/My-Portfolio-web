package com.abhishekrajput.portfolio.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import com.abhishekrajput.portfolio.dto.request.ContactRequest;
import com.abhishekrajput.portfolio.service.ContactService;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(ContactController.class)
class ContactControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper objectMapper;

	@MockitoBean
	private ContactService contactService;

	@Test
	void submitWithValidPayloadReturnsOkAndInvokesService() throws Exception {
		ContactRequest request = new ContactRequest("Jane Doe", "jane@example.com", "Let's talk",
				"I'd like to discuss a backend role opportunity.");

		mockMvc.perform(post("/api/contact")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(request)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.message").exists());

		verify(contactService).send(any(ContactRequest.class));
	}

	@Test
	void submitWithBlankFieldsReturnsBadRequestWithFieldErrors() throws Exception {
		ContactRequest request = new ContactRequest("", "not-an-email", "", "short");

		mockMvc.perform(post("/api/contact")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(request)))
				.andExpect(status().isBadRequest())
				.andExpect(jsonPath("$.status").value(400))
				.andExpect(jsonPath("$.errors").isArray())
				.andExpect(jsonPath("$.errors", org.hamcrest.Matchers.not(org.hamcrest.Matchers.empty())));
	}
}
