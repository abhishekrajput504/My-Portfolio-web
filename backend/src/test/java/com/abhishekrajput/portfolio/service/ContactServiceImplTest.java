package com.abhishekrajput.portfolio.service;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.MailSendException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import com.abhishekrajput.portfolio.config.ContactMailProperties;
import com.abhishekrajput.portfolio.dto.request.ContactRequest;
import com.abhishekrajput.portfolio.exception.EmailSendException;

@ExtendWith(MockitoExtension.class)
class ContactServiceImplTest {

	@Mock
	private JavaMailSender mailSender;

	private final ContactMailProperties mailProperties = new ContactMailProperties(
			"rupesh.ar33@gmail.com", "no-reply@abhishekrajput.dev");

	@Test
	void sendDelegatesToJavaMailSender() {
		ContactServiceImpl service = new ContactServiceImpl(mailSender, mailProperties);
		ContactRequest request = new ContactRequest("Jane Doe", "jane@example.com", "Let's talk",
				"I'd like to discuss a backend role opportunity.");

		service.send(request);

		verify(mailSender).send(any(SimpleMailMessage.class));
	}

	@Test
	void sendWrapsMailExceptionInEmailSendException() {
		doThrow(new MailSendException("smtp down")).when(mailSender).send(any(SimpleMailMessage.class));
		ContactServiceImpl service = new ContactServiceImpl(mailSender, mailProperties);
		ContactRequest request = new ContactRequest("Jane Doe", "jane@example.com", "Let's talk",
				"I'd like to discuss a backend role opportunity.");

		assertThatThrownBy(() -> service.send(request)).isInstanceOf(EmailSendException.class);
	}
}
