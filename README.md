<div align="center">

# Fhir (HL7)

![fire_logo](./assets/fire_avatar_white.png)

_Data sem atrito_

<br> 

</div>

Trabalhar com dados em saúde é um desafio grande, uma das premissas fundamentais desse tipo de dado é a posse e a interoperabilidade. A interoperabilidade é a possibilidade de um dado em saúde transitar entre sistemas/aplicações não necessariamente dos mesmos fornecedores a depender da consessão do paciente/cliente, ainda que o dado esteja no domínio da sua aplicação.

O HL7 Fhir é um padrão de conformidade dos dados de saúde utilizado internacionalmente para transição mencionada acima. Se assemelha a uma [orientação a dados](https://blog.klipse.tech/dop/2022/06/22/principles-of-dop.html) não muito comum em softwares atuais mas essencial para as regras de negócio em saúde.

<br>

> A princípio os componentes serão "documentados" em português nos testes e em inglês no próprio código com JsDoc.

---

## Justificativa
As principais bibliotecas de FHIR (incluindo as do Java) se concentram na implementação de arquitetura em que esses padrões serão trabalhados, mas a essência de como o dado deve ser é ausente, _i.e._ o paradigma orientado a dados em uma de suas premissas permitem que os dados de saúde já instanciados sejam imutáveis, o que é ideal para esse tipo de dado.

Abaixo vemos um resumo fornecido por Yehonathan Sharvit de como essas regras devem ser respeitadas:

![ Orientação a Dados - Fonte: https://blog.klipse.tech/dop/2022/06/22/principles-of-dop.html](https://blog.klipse.tech/uml/chapter00/do-principles-mind-map.png)

<br>

## Implementação
