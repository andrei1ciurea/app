package app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

/**
 * Created by aciurea on 9/25/2017.
 */
@Entity
public class Day {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Integer id;

    private String date;

    private List<Activity> activityList;


}
