package cap.workwalk.conf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService customUserService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    //인증과 관련된 부분 ( service와 passwordEncoder를 넘겨준다
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.userDetailsService(customUserService).passwordEncoder(passwordEncoder());
    }

    //접근 권한을 체크할 필요X
    private static final String[] PUBLIC_MATCHERS = {
            "/css/**",
            "/js/**",
            "/images/**",
            "/webjars/**",
            "/about/**",
            "/contact/**",
            "/error/**/*",
            "/console/**"
    };

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                   .antMatchers(PUBLIC_MATCHERS).permitAll()   // 누구나 접근 허용
                   .antMatchers("/login", "/home", "/", "/signup","/testing").permitAll()
                  //.antMatchers("/").hasRole("USER")   // USER & ADMIN 접근 허용
                  .antMatchers("/admin/**").hasRole("ADMIN")  // ADMIN 접근 허용
                  .anyRequest().authenticated()   // 나머지 요청들 종류에 상관없이 권한이 있어야 접근 허용

                .and()
                    .formLogin()
                        .loginPage("/login")         //로그인페이지
                        .defaultSuccessUrl("/home")  //로그인 성공후 리다이렉트 주소
                        .failureUrl("/login?error")         //로그인 에러 페이지
                        .permitAll()
                .and()
                    .logout()                       // 로그아웃 페이지
                        .logoutRequestMatcher(new AntPathRequestMatcher("/logout")) //로그아웃을 실행할 주소
                        .logoutSuccessUrl("/login?logout")  //로그아웃 성공시
                        .invalidateHttpSession(true)//세션 날리기, 세션 전체 삭제
                        .permitAll()
                .and()
                .exceptionHandling()
                .accessDeniedPage("/accessDenied");
    }



}
