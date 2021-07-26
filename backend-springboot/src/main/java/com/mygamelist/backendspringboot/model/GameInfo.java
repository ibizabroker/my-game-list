package com.mygamelist.backendspringboot.model;

import javax.persistence.*;

@Entity
@Table(name = "gameInfo")
public class GameInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "genre")
    private String genre;

    @Column(name = "rating")
    private float rating;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "description")
    private String description;

    @Column(name = "youtubeLink")
    private String youtubeLink;

    public GameInfo() {

    }

    public GameInfo(String name, String genre, float rating, String imageUrl, String description, String youtubeLink) {
        this.name = name;
        this.genre = genre;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.description = description;
        this.youtubeLink = youtubeLink;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getGenre() {
        return genre;
    }

    public float getRating() {
        return rating;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public String getYoutubeLink() {
        return youtubeLink;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setYoutubeLink(String youtubeLink) {
        this.youtubeLink = youtubeLink;
    }
}
