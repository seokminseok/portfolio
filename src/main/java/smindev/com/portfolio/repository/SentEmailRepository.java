package smindev.com.portfolio.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import smindev.com.portfolio.entites.SentEmailEntity;


@Repository
public interface SentEmailRepository extends CrudRepository<SentEmailEntity, Long> {
}
