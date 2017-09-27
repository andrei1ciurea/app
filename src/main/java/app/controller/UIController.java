package app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by aciurea on 9/27/2017.
 */
@Controller
public class UIController {
    @RequestMapping(path = "/")
    public String getView() {
        return "index.html";
    }
}
