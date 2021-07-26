package com.mygamelist.backendspringboot.repository;

import com.mygamelist.backendspringboot.model.GameInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameInfoRepository extends JpaRepository<GameInfo, Long> {

}
