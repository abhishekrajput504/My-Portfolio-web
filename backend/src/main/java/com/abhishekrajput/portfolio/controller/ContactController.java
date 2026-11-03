package com.abhishekrajput.portfolio.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abhishekrajput.portfolio.dto.request.ContactRequest;
import com.abhishekrajput.portfolio.dto.response.ContactResponse;
import com.abhishekrajput.portfolio.service.ContactService;

import jakarta.validation.Valid;

@RestController 
public class ContactController {

	private final ContactService contactService;

	public ContactController(ContactService contactService) {
		this.contactService = contactService;
	}

	@PostMapping("/api/contact")
	public ResponseEntity<ContactResponse> submit(@Valid @RequestBody ContactRequest request) {
		contactService.send(request);
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ContactResponse("Thanks for reaching out — I'll get back to you soon."));
	}
}
