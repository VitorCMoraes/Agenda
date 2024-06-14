package io.github.vitorcmoraes.agenda.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Contato implements Comparable<Contato> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(length = 11)
    private String number;

    @Override
    public int compareTo(Contato outroContato) {
        return this.getName().compareToIgnoreCase(outroContato.getName());
    }
}
