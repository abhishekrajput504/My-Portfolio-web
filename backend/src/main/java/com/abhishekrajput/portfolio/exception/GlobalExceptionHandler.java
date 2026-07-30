package com.abhishekrajput.portfolio.exception;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.abhishekrajput.portfolio.dto.response.ApiErrorResponse;
import com.abhishekrajput.portfolio.dto.response.ApiErrorResponse.FieldError;

@RestControllerAdvice
public class GlobalExceptionHandler {

	private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ApiErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
		List<FieldError> errors = ex.getBindingResult().getFieldErrors().stream()
				.map(fieldError -> new FieldError(fieldError.getField(), fieldError.getDefaultMessage()))
				.toList();

		ApiErrorResponse body = ApiErrorResponse.of("Validation failed", HttpStatus.BAD_REQUEST.value(), errors);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
	}

	@ExceptionHandler(EmailSendException.class)
	public ResponseEntity<ApiErrorResponse> handleEmailSend(EmailSendException ex) {
		log.error("Failed to send contact email", ex);
		ApiErrorResponse body = ApiErrorResponse.of(
				"We couldn't deliver your message right now. Please try again shortly or email directly.",
				HttpStatus.BAD_GATEWAY.value());
		return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(body);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ApiErrorResponse> handleGeneric(Exception ex) {
		log.error("Unhandled exception", ex);
		ApiErrorResponse body = ApiErrorResponse.of(
				"Something went wrong. Please try again in a moment.",
				HttpStatus.INTERNAL_SERVER_ERROR.value());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
	}
}
