package net.zapp.backenddemo.controller;

import net.zapp.backenddemo.model.User;
import net.zapp.backenddemo.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users") // This sets the base URL for this whole controller
@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // This handles GET requests to http://localhost:8080/api/users
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Add this inside your UserController class:
    @PostMapping
    public User createUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(userDetails.getUsername());
            user.setEmail(userDetails.getEmail());
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Delete a user
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
