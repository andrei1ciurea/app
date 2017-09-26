package app.controller;

import app.entities.Activity;
import app.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller    // This means that this class is a Controller
@RequestMapping(path = "/activity") // This means URL's start with /demo (after Application path)
public class ActivityController {

    @Autowired
    private ActivityRepository activityRepository;

    @GetMapping(path = "/add")
    public
    @ResponseBody
    String addNewActivity(@RequestParam String name, @RequestParam String details) {

        Activity activity = new Activity();
        activity.setName(name);
        activity.setDetails(details);

        activityRepository.save(activity);

        return "Saved";
    }

    @GetMapping(path = "/all")
    public
    @ResponseBody
    Iterable<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

}

