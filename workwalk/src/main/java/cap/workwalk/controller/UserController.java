package cap.workwalk.controller;

import cap.workwalk.entity.Pet;
import cap.workwalk.entity.Role;
import cap.workwalk.entity.User;
import cap.workwalk.service.CustomUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class UserController {

    @Autowired
    CustomUserService customUserService;

    @GetMapping("/signup")
    public String signUp(Model model) {
        model.addAttribute("user", new User());
        model.addAttribute("pet", new Pet());
        return "signup";
    }

    @PostMapping("/signup")
    public String signUpPost(@ModelAttribute("user") User user) {
            Role role = customUserService.findByRolename("USER");
            List<Role> userRoles = new ArrayList<>();
            userRoles.add(role);

            customUserService.signUpUser(user, userRoles);

            return "redirect:/login";
    }

}
