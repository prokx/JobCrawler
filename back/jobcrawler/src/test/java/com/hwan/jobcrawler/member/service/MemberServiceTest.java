package com.hwan.jobcrawler.member.service;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static com.hwan.jobcrawler.member.entity.QMember.member;

@SpringBootTest
class MemberServiceTest {
  @Autowired
  JPAQueryFactory jpaQueryFactory;
  @Test
  public void queryPractice(){
    System.out.println(jpaQueryFactory.selectFrom(member).fetch());
  }
}