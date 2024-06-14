package io.github.vitorcmoraes.agenda.model.repository;

import io.github.vitorcmoraes.agenda.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {
    List<Contato> findByNameContainingIgnoreCase(String termoBusca);
}
