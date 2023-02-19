package com.hwan.jobcrawler.member.dto;

import com.hwan.jobcrawler.member.entity.Member;
import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;



@Data
public class MemberLoginRequestDto {
  @NotBlank(message="아이디는 필수 입력 항목입니다.")
  private String memberId;

  @NotBlank(message="비밀번호는 필수 입력 항목입니다.")
  @Pattern(regexp="(?=.*[0-9])(?=.*[a-z])(?=.*\\W)(?=\\S+$).{6,12}",
          message = "비밀번호는 영문자와 숫자, 특수기호가 적어도 1개 이상 포함된 6자~12자의 비밀번호여야 합니다.")
  private String password;

  public Member dtoToMember(){
    return Member.builder().memberId(memberId).password(password).build();
  }

}