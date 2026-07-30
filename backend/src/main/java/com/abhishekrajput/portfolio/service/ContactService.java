package com.abhishekrajput.portfolio.service;

import com.abhishekrajput.portfolio.dto.request.ContactRequest;

public interface ContactService {

	void send(ContactRequest request);
}
