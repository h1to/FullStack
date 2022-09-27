package lab.firts.fullstack.repository;

import lab.firts.fullstack.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepo extends JpaRepository<Client,Long> {


}
