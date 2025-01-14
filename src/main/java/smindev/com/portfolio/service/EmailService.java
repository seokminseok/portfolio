package smindev.com.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import smindev.com.portfolio.repository.SentEmailRepository;

@Controller
public class EmailService {
    private final JavaMailSender mailSender;
    private final SentEmailRepository sentEmailRepository;

    @Autowired
    public EmailService(JavaMailSender mailSender, SentEmailRepository sentEmailRepository) {
        this.mailSender = mailSender;
        this.sentEmailRepository = sentEmailRepository;
    }


}
