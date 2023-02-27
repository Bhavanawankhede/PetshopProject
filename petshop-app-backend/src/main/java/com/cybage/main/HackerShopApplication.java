package com.cybage.main;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.cybage.config.TwilioConfig;
import com.cybage.daos.UserRepository;
import com.cybage.dtos.UserDto;
import com.twilio.Twilio;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication(scanBasePackages = "com.cybage")
@EnableJpaRepositories("com.cybage.daos")
@EntityScan("com.cybage.entities")
@OpenAPIDefinition( info = @Info(title = "Spring boot otp authentication",version = "1.0.0"))
public class HackerShopApplication {

	@Autowired
	private TwilioConfig twilioConfig;
	
	@PostConstruct
	public void initTwilio(){
		Twilio.init(twilioConfig.getAccountSid(),twilioConfig.getAuthToken());
	}

	public static void main(String[] args) {
		SpringApplication.run(HackerShopApplication.class, args);
	}

	
}
