package com.mygamelist.backendspringboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mygamelist.backendspringboot.excetion.ResourceNotFoundException;
import com.mygamelist.backendspringboot.model.GameInfo;
import com.mygamelist.backendspringboot.repository.GameInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GameInfoController {

    @Autowired
    private GameInfoRepository gameInfoRepository;

    @GetMapping("/gameInfo")
    public List<GameInfo> getAllGameInfo(){
        return gameInfoRepository.findAll();
    }

    @PostMapping("/gameInfo")
    public GameInfo createGameInfo(@RequestBody GameInfo gameInfo) {
        return gameInfoRepository.save(gameInfo);
    }

    @GetMapping("/gameInfo/{id}")
    public ResponseEntity<GameInfo> getGameInfoById(@PathVariable Long id) {
        GameInfo gameInfo = gameInfoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Game does not exists with id: " + id));
        return ResponseEntity.ok(gameInfo);
    }

    @PutMapping("/gameInfo/{id}")
    public ResponseEntity<GameInfo> updateGameInfo(@PathVariable Long id, @RequestBody GameInfo gameInfoDetails) {
        GameInfo gameInfo = gameInfoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Game does not exists with id: " + id));
        gameInfo.setName(gameInfoDetails.getName());
        gameInfo.setGenre(gameInfoDetails.getGenre());
        gameInfo.setRating(gameInfoDetails.getRating());
        gameInfo.setDescription(gameInfoDetails.getDescription());
        gameInfo.setImageUrl(gameInfoDetails.getImageUrl());
        gameInfo.setYoutubeLink(gameInfoDetails.getYoutubeLink());

        GameInfo updatedGameInfo = gameInfoRepository.save(gameInfo);
        return ResponseEntity.ok(updatedGameInfo);
    }

    @DeleteMapping("/gameInfo/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteGameInfo(@PathVariable Long id) {
        GameInfo gameInfo = gameInfoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Game does not exists with id: " + id));
        gameInfoRepository.delete(gameInfo);
        Map<String, Boolean>  response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
