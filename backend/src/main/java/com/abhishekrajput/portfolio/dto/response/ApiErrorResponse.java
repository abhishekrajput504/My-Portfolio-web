package com.abhishekrajput.portfolio.dto.response;

import java.time.Instant;
import java.util.List;

public record ApiErrorResponse(String message, int status, Instant timestamp, List<FieldError> errors) {

	public record FieldError(String field, String message) {
	}

	public static ApiErrorResponse of(String message, int status) {
		return new ApiErrorResponse(message, status, Instant.now(), List.of());
	}

	public static ApiErrorResponse of(String message, int status, List<FieldError> errors) {
		return new ApiErrorResponse(message, status, Instant.now(), errors);
	}
}
