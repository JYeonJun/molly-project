package kr.co.kumoh.illdang100.mollyspring.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum UserEnum {

    ADMIN("관리자"), CUSTOMER("고객");
    private String value;
}

