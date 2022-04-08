package cap.workwalk.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Builder
public class UserInfoDto implements Serializable {
    private String memberId;
    private String password;
    private String auth;
}
