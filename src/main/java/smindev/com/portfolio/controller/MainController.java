package smindev.com.portfolio.controller;


import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/")
public class MainController {

    @RequestMapping(value = "/",method = RequestMethod.GET,produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getPage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index/portfolio");
        return modelAndView;
    }
}
