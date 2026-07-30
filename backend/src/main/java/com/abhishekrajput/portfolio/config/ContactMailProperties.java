package com.abhishekrajput.portfolio.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app.mail")
public record ContactMailProperties(String to, String from) {
}
