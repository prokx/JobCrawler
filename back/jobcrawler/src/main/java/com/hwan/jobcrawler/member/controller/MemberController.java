package com.hwan.jobcrawler.member.controller;

import com.hwan.jobcrawler.member.TokenInfo;
import com.hwan.jobcrawler.member.dto.MemberLoginRequestDto;
import com.hwan.jobcrawler.member.entity.Member;
import com.hwan.jobcrawler.member.service.MemberService;
import io.swagger.annotations.Api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Tag(name="로그인 관련",description="로그인 관련입니다.")
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {
  private final MemberService memberService;


  @Operation(summary="로그인 메서드",description = "로그인 메서드입니다.")
  @ApiResponses(value = {
          @ApiResponse(responseCode = "200",description = "로그인 성공입니다", content = @Content(schema = @Schema(implementation = TokenInfo.class)))
  })
  @PostMapping("/login")
  public TokenInfo login(@RequestBody MemberLoginRequestDto memberLoginRequestDto) {
    String memberId = memberLoginRequestDto.getMemberId();
    String password = memberLoginRequestDto.getPassword();
    TokenInfo tokenInfo = memberService.login(memberId, password);
    return tokenInfo;
  }

  @Operation(summary = "회원가입",description = "회원가입을 진행합니다")
  @ApiResponses(value = {@ApiResponse(responseCode = "200",description = "회원가입 성공",content = @Content(schema = @Schema(implementation = Integer.class)))})
  @PostMapping("/join")
  public ResponseEntity<Member> join(@RequestBody MemberLoginRequestDto memberLoginRequestDto){
    log.info(memberLoginRequestDto.getMemberId()+"id!!!!!!");
    Member member = memberService.join(memberLoginRequestDto);

    return ResponseEntity.ok(member);
  }
}