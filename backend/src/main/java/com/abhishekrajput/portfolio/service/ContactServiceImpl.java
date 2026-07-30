package com.abhishekrajput.portfolio.service;

import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.abhishekrajput.portfolio.config.ContactMailProperties;
import com.abhishekrajput.portfolio.dto.request.ContactRequest;
import com.abhishekrajput.portfolio.exception.EmailSendException;

@Service
public class ContactServiceImpl implements ContactService {

	private final JavaMailSender mailSender;
	private final ContactMailProperties mailProperties;

	public ContactServiceImpl(JavaMailSender mailSender, ContactMailProperties mailProperties) {
		this.mailSender = mailSender;
		this.mailProperties = mailProperties;
	}

	@Override
	public void send(ContactRequest request) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(mailProperties.to());
		message.setFrom(mailProperties.from());
		message.setReplyTo(request.email());
		message.setSubject("[Portfolio contact] %s".formatted(request.subject()));
		message.setText("""
				New message from the portfolio contact form.

				Name: %s
				Email: %s

				%s
				""".formatted(request.name(), request.email(), request.message()));

		try {
			mailSender.send(message);
		} catch (MailException ex) {
			throw new EmailSendException("Failed to send contact form email", ex);
		}
	}
}
