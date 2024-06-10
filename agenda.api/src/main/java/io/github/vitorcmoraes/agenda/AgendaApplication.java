package io.github.vitorcmoraes.agenda;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class AgendaApplication {

	public static void main (String[] args) {
		SpringApplication.run(AgendaApplication.class, args);
	}
}
