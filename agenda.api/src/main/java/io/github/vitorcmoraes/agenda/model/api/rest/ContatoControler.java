package io.github.vitorcmoraes.agenda.model.api.rest;

import io.github.vitorcmoraes.agenda.model.entity.Contato;
import io.github.vitorcmoraes.agenda.model.repository.ContatoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/contatos")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ContatoControler {

    private final ContatoRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contato save(@RequestBody Contato contato) {
        return repository.save(contato);
    }

    @GetMapping
    public List<Contato> getAll() {
        return repository.findAll();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        repository
                .findById(id)
                .map(pessoa -> {
                    repository.delete(pessoa);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pessoa não encontrada."));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void refresh(@PathVariable Integer id, @RequestBody Contato contatoAtualizado) {
        repository
                .findById(id)
                .map(contato -> {
                    contatoAtualizado.setId(contato.getId());
                    return repository.save(contatoAtualizado);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Contato não encontrado"));
    }
}
