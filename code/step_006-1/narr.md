# React

``` javaScript

1. 기본 문서는 App.js에서 사용

2. 문법 jsx는 문서 내부에서 html코드를 그래도 사용할 수 있도록 만들어진 형태

3. html형태인 jsx내부에서 js코드를 사용하기 위해서는 {}를 사용하여 처리

4. 단, style인 경우에는 {}내부에 {}를 한번 더 사용하여야 하며, 문법은 js와 동일하게
    camelCase방식으로 사용 
    (예:style = {{fontFamily:'sans-serif', backgroundImage:'url()'}})

5. component는 일종의 함수로 이해하며, function Box(){}라는 함수이자 Box 컴포넌트

6. 실제로 jsx 기법으로 사용시에는 <Box /> || <Box><Box/> 형태로 사용한다.

7. 가장 상위의 위치에서는 (컴포넌트포함) 하나의 요소 또는 하나의 컴포넌트만 존재
    여러개가 동일한 레벨일 경우 하나의 빈 컴포넌트를 감싸서 사용
    (예: <></> || <Fragment></Fragment>)

8. 컴포넌트를 통해 data를 전달하는 경우에는 props를 사용하여 처리한다.
    props는 일종의 속성을 칭하게 되며, 
    컴포넌트에서 속성명의 내용이 전달되는 인자(argumnet)의 객체명으로 전달이 된다.

9. 하나의 컴포넌트 문서에서 외부데이터를 불러오는 경우
    import를 사용하는 위치(최상위)는 `src폴더` 내부의 자료를 가져오는 형태이며,
    컴포넌트 사용하는 내부에서는 `public폴더` 내부의 자료를 가져오는 형태로 인식한다.

10. 컴포넌트에서 `return` 내부에서는 jsx형태와 결론으로 처리되는 형태들만 담고,
    `return` 이전의 위치에서는 변수,함수.... 기능의 형태를 배치하게 된다.

11. 핸들러-이벤트핸들러

```