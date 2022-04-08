package cap.workwalk.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    //실제 사용자 아이디, notnull, 중복X
    @Column(nullable=false, unique=true)
    private String memberId;

    //비밀번호
    @Column(nullable=false)
    private String password;

    //이름
    @Column
    private String name;

    //닉네임
    @Column
    private String nickname;

    //주소
    @Column
    private String address;
/*
    //연락처
    @Column
    private String phone;

    //성별
    @Column
    private String sex;

    //생일
    @Column
    private String birth;

    //자격증 여부
    @Column
    private String license;

    //프로필사진
    @Column
    private String imgUrl;

*/
    //유저인지 관리자인지 설정 user-role 양방향 many-many 관계
    @ManyToMany(cascade=CascadeType.MERGE)
    @JoinTable(
            name="user_role",
            joinColumns={@JoinColumn(name="USER_ID", referencedColumnName="ID")},
            inverseJoinColumns={@JoinColumn(name="ROLE_ID", referencedColumnName="ID")})
    private List<Role> roles;
}