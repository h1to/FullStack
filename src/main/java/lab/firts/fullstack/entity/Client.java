package lab.firts.fullstack.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "client")
@NoArgsConstructor
@AllArgsConstructor
public class Client {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;

}