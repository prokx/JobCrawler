package com.hwan.jobcrawler.job.controller;

import com.hwan.jobcrawler.job.dto.JobDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobController {
  public final static String URL = "https://job.incruit.com/entry/searchjob.asp?occ1=150&page=";

  @GetMapping("/jobs")
  public void getJob() throws Exception{
    Document doc;
    for(int i=1;i<3;i++){
      doc = Jsoup.connect(URL+i).get();
      System.out.println(doc);
    }


  }

}
