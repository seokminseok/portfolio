package smindev.com.portfolio.controller;


import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import smindev.com.portfolio.entites.SentEmailEntity;
import smindev.com.portfolio.repository.SentEmailRepository;

import java.util.HashMap;
import java.util.Map;

@Controller
public class EmailController {
    private final JavaMailSender mailSender;
    private final SentEmailRepository sentEmailRepository;

    @Autowired
    public EmailController(JavaMailSender mailSender, SentEmailRepository sentEmailRepository) {
        this.mailSender = mailSender;
        this.sentEmailRepository = sentEmailRepository;
    }


    @PostMapping("/mail/send")
    public ResponseEntity<?> sendEmail(@ModelAttribute SentEmailEntity email) {
        try {
            // 이메일 메시지 생성
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("dltjrals1018@gmail.com"); // 수신자 이메일
            message.setSubject("이메일 왔어요"); // 이메일 제목
            message.setText("Name: " + email.getName() + "\n" +
                    "Email: " + email.getEmail() + "\n" +
                    "Content: " + email.getContent()); // 이메일 내용

            // 이메일 데이터 저장 (DB 저장)
            sentEmailRepository.save(email);

            // 이메일 전송
            mailSender.send(message);

            // JSON 응답 생성
            Map<String, String> response = new HashMap<>();
            response.put("message", "이메일이 성공적으로 전송되었습니다.");
            return ResponseEntity.ok(response); // 200 상태코드 반환
        } catch (Exception e) {
            // 오류 처리
            System.err.println("Error sending email: " + e.getMessage());

            // 오류 응답 생성
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "이메일 전송 중 문제가 발생했습니다.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse); // 500 상태코드 반환
        }

    }
}
