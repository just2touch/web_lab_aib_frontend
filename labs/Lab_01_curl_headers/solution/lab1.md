
# Лабораторная работа №1

В данной работе вы будете отправлять HTTP запросы и изучать HTTP ответы.

## Цель работы

Познакомиться с протоколом HTTP и протоколом HTTPS, а так же особенностями установления соединения между источником и получателем.

## Сама работа

Для получения запросов с сайтов я использовал такую команду, как

`curl example.ru`

Чтобы не выдавалось всё тело сайта, я использовал флаг:
`-I`

Также, для игнорирования проверки SSL-сертификата я использовал флаг: `-k`

Чтобы видеть и запрос, который мы делаем, и ответ сервера я использовал флаг: `-v`

И, наконец, чтобы curl следовал любому перенаправлению в случаае возникновения каких-то ошибок, я использовал флаг: `-L`

### РГУПС

Для получения запроса с __[РГУПС](https://www.rgups.ru/)__:

`curl rgups.ru -I -k -v -L`

Ниже будут строки и их пояснение:

```shell
*   Trying 80.72.224.90:80...
* Connected to rgups.ru (80.72.224.90) port 80 (#0)
> HEAD / HTTP/1.1 - тип запроса HEAD и версия протокола HTTP 1.1
> Host: rgups.ru - указание доменного имени сервера, к которому отправляется запрос
> User-Agent: curl/8.0.1 - информация о клиенте, отправляющего запрос
> Accept: */* - "/" означает, что клиент предпочитает принимать все типы контента
>
< HTTP/1.1 301 Moved Permanently
HTTP/1.1 301 Moved Permanently - статусная строка сервера 301, указывает на постоянное перенапрвление ресурса.
< Server: nginx/1.19.1
Server: nginx/1.19.1 - программное обеспечение сервера nginx/1.19.1
< Date: Sun, 17 Sep 2023 14:55:42 GMT
Date: Sun, 17 Sep 2023 14:55:42 GMT - дата и время ответа сервера
< Content-Type: text/html
Content-Type: text/html - тип ответа сервера
< Content-Length: 169
Content-Length: 169 - размер тела ответа в байтах
< Connection: keep-alive
Connection: keep-alive - состояние соединения сервера с клиентом, keep-alive - значит состояние должно быть постоянно поддерживаемым
< Location: https://rgups.ru/
Location: https://rgups.ru/ - URL-адрес ресурса для перенаправления

<
* Connection #0 to host rgups.ru left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://rgups.ru/'
*   Trying 80.72.224.90:443...
* Connected to rgups.ru (80.72.224.90) port 443 (#1)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD / HTTP/1.1
> Host: rgups.ru
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
HTTP/1.1 200 OK - стутусная строка сервера 200, указывает на успешное выполнение запроса ОК
< Server: nginx/1.19.1
Server: nginx/1.19.1
< Date: Sun, 17 Sep 2023 14:55:43 GMT
Date: Sun, 17 Sep 2023 14:55:43 GMT
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8 - utf-8 - кодировка текста 
< Connection: keep-alive
Connection: keep-alive
< X-Powered-By: ProcessWire CMS
X-Powered-By: ProcessWire CMS - программное обеспечение сервера ProcessWire CMS
< Set-Cookie: wire=2ea8a9fa89b85abc0de45224629b4bd8; path=/; HttpOnly; SameSite=Lax
Set-Cookie: wire=2ea8a9fa89b85abc0de45224629b4bd8; path=/; HttpOnly; SameSite=Lax - устанавливает куки для клиента с параметрами
< Expires: Thu, 19 Nov 1981 08:52:00 GMT
Expires: Thu, 19 Nov 1981 08:52:00 GMT - дата и время, когда ответ считается устаревшим
< Cache-Control: no-store, no-cache, must-revalidate
Cache-Control: no-store, no-cache, must-revalidate - указывает использование кэша ответа, в данном случае кэшировать не надо и ответ должен быть проверен перед использованием
< Pragma: no-cache
Pragma: no-cache - ответ не использует никакого кэширования, должен быть всегда запрошен с сервера 

<
* Connection #1 to host rgups.ru left intact
```

### GITHUB

Для получения запроса с __[GITHUB](https://github.com/)__:

`curl github.com -I -k -v -L`

Ниже будут строки и их пояснение:

```shell
*   Trying 140.82.121.3:80...
* Connected to github.com (140.82.121.3) port 80 (#0)
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
HTTP/1.1 301 Moved Permanently
< Content-Length: 0
Content-Length: 0
< Location: https://github.com/
Location: https://github.com/

<
* Connection #0 to host github.com left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://github.com/'
*   Trying 140.82.121.3:443...
* Connected to github.com (140.82.121.3) port 443 (#1)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Server: GitHub.com
Server: GitHub.com
< Date: Wed, 01 Nov 2023 18:37:49 GMT
Date: Wed, 01 Nov 2023 18:37:49 GMT
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With
Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With - указание факторов, которые могут влияеть на кэширование ответа на стороне клиента (или прокси сервра)
< content-language: en-US
content-language: en-US - язык контента в ответе
< ETag: W/"f012cf6649abd0bbc1a0af67a34f1db1"
ETag: W/"f012cf6649abd0bbc1a0af67a34f1db1" - метка версии ресурса, с помощью неё клиент понимает нужно ли ему менять получать новую версию ресурса
< Cache-Control: max-age=0, private, must-revalidate
Cache-Control: max-age=0, private, must-revalidate
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload - указывает, что клиент должен поддерживать строгую безопасность транспортного уровня HTTPS в течении 31536000 секунд и включать поддомены
< X-Frame-Options: deny
X-Frame-Options: deny - мера безопасности, предотвращающая атаки на сервер
< X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff - предотвращение браузера от интерпретации содержимого как чего-то, что не в Content-Type
< X-XSS-Protection: 0
X-XSS-Protection: 0 -  указание что браузер не должен активировать механизм защиты от межсайтового скриптового выполнения XSS
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - управление тем, какой информацией о предыдущей странице делится браузер при переходе по ссылке
< Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.githubcopilot.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events objects-origin.githubusercontent.com *.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.githubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com support.github.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github-production-user-asset-6210df.s3.amazonaws.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/
Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.githubcopilot.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events objects-origin.githubusercontent.com *.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.githubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com support.github.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github-production-user-asset-6210df.s3.amazonaws.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/ - дополнительный уровень безопасности, позволяющий распознавать и устранять определённые типы атак, таких как Cross Site Scripting (XSS (en-US)) и атаки внедрения данных
< Set-Cookie: _gh_sess=T8f0pPBWH0WAA2C6Gd2zZgXl6DjwvAmn82XpVBDJNNLBSB2EFLa333NUaXihA3dqQnbyp0zx1lb624kCSj2Orr9mrXc3gJpBvA0C9poKHCatqz8Bly0oK3E5kvmWE%2Fpa5f7pzPNPhgQj9olIIqw1BGr2OGlvp%2BTj%2Fz3aBzRZCnpb5i4VNZlUdPBuZLpN7vi6zp18g7pkD%2F1CUqxShfNViu3KCCgJC3zTHMA6TB27ww7%2BbukNrsIG5VdpcNfYF%2BbukOfYm8NxyY%2BIuHqr3kr92g%3D%3D--jZD6Xjpqqb13%2FfRj--jaH3CJDHFOrHpOY2nUZQ4w%3D%3D; Path=/; HttpOnly; Secure; SameSite=Lax
Set-Cookie: _gh_sess=T8f0pPBWH0WAA2C6Gd2zZgXl6DjwvAmn82XpVBDJNNLBSB2EFLa333NUaXihA3dqQnbyp0zx1lb624kCSj2Orr9mrXc3gJpBvA0C9poKHCatqz8Bly0oK3E5kvmWE%2Fpa5f7pzPNPhgQj9olIIqw1BGr2OGlvp%2BTj%2Fz3aBzRZCnpb5i4VNZlUdPBuZLpN7vi6zp18g7pkD%2F1CUqxShfNViu3KCCgJC3zTHMA6TB27ww7%2BbukNrsIG5VdpcNfYF%2BbukOfYm8NxyY%2BIuHqr3kr92g%3D%3D--jZD6Xjpqqb13%2FfRj--jaH3CJDHFOrHpOY2nUZQ4w%3D%3D; Path=/; HttpOnly; Secure; SameSite=Lax
< Set-Cookie: _octo=GH1.1.207275965.1698863871; Path=/; Domain=github.com; Expires=Fri, 01 Nov 2024 18:37:51 GMT; Secure; SameSite=Lax
Set-Cookie: _octo=GH1.1.207275965.1698863871; Path=/; Domain=github.com; Expires=Fri, 01 Nov 2024 18:37:51 GMT; Secure; SameSite=Lax
< Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Fri, 01 Nov 2024 18:37:51 GMT; HttpOnly; Secure; SameSite=Lax
Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Fri, 01 Nov 2024 18:37:51 GMT; HttpOnly; Secure; SameSite=Lax
< Accept-Ranges: bytes
Accept-Ranges: bytes -  указание, что сервер поддерживает диапазоны запросов для данного ресурса
< X-GitHub-Request-Id: F17C:5A29:636949:64BD3A:65429AFE
X-GitHub-Request-Id: F17C:5A29:636949:64BD3A:65429AFE - содержание идентификатора запроса, который может быть полезен для отслеживания запроса на стороне сервера

<
* Connection #1 to host github.com left intact
```

### РЖД

Для получения запроса с __[РЖД](https://www.rzd.ru/)__:

`curl rzd.ru -I -k -v -L --User-agent "Yandex"`

`--User-agent "Yandex"` - указание серверу, какое ПО или устройство отправляет запрос

Ниже будут строки и их пояснение:

```shell
*   Trying 212.164.138.131:80...
* Connected to rzd.ru (212.164.138.131) port 80 (#0)
> HEAD / HTTP/1.1
> Host: rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
HTTP/1.1 301 Moved Permanently
< Date: Wed, 01 Nov 2023 19:54:22 GMT
Date: Wed, 01 Nov 2023 19:54:22 GMT
< Content-Type: text/html
Content-Type: text/html
< Content-Length: 150
Content-Length: 150
< Connection: keep-alive
Connection: keep-alive
< Location: https://rzd.ru:443/
Location: https://rzd.ru:443/

<
* Connection #0 to host rzd.ru left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://rzd.ru:443/'
*   Trying 212.164.138.131:443...
* Connected to rzd.ru (212.164.138.131) port 443 (#1)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD / HTTP/1.1
> Host: rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
HTTP/1.1 301 Moved Permanently
< Content-Type: text/html
Content-Type: text/html
< Content-Length: 185
Content-Length: 185
< Connection: keep-alive
Connection: keep-alive
< Date: Wed, 01 Nov 2023 19:54:23 GMT
Date: Wed, 01 Nov 2023 19:54:23 GMT
< Location: https://www.rzd.ru/
Location: https://www.rzd.ru/
< Set-Cookie: session-cookie=179397ddc15556768be3702518991a24d40bbcedc188674771351c6eca2fde3360d0edcd433fa7ea1b01a5c25a59f3c9; Max-Age=86400; Path=/; secure; HttpOnly
Set-Cookie: session-cookie=179397ddc15556768be3702518991a24d40bbcedc188674771351c6eca2fde3360d0edcd433fa7ea1b01a5c25a59f3c9; Max-Age=86400; Path=/; secure; HttpOnly
< X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; mode=block

<
* Connection #1 to host rzd.ru left intact
* Issue another request to this URL: 'https://www.rzd.ru/'
*   Trying 212.164.138.128:443...
* Connected to www.rzd.ru (212.164.138.128) port 443 (#2)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
Content-Type: text/html;charset=utf-8
< Content-Length: 206338
Content-Length: 206338 - длина содержимого ответа в байтах - 206338 байт
< Connection: keep-alive
Connection: keep-alive
< Date: Wed, 01 Nov 2023 19:54:23 GMT
Date: Wed, 01 Nov 2023 19:54:23 GMT
< Vary: Accept-Encoding
Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-bc445bf7f-p6k8d
X-UCM-Pod-Name: inex-ucm-bc445bf7f-p6k8d - идентификация серверного подключения
< Strict-Transport-Security: max-age=15724800; includeSubDomains
Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx3
Via: nginx3 - указание на прокси сервер через который шёл запрос
< X-Frame-Options: sameorigin
X-Frame-Options: sameorigin
< Set-Cookie: session-cookie=179397ddd2c01ae78be3702518991a24f6548d03a67f356fb7fb85c9a8da722a18b1bcef586a225d057565ff7da979c1; Max-Age=86400; Path=/; secure
Set-Cookie: session-cookie=179397ddd2c01ae78be3702518991a24f6548d03a67f356fb7fb85c9a8da722a18b1bcef586a225d057565ff7da979c1; Max-Age=86400; Path=/; secure
< X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; mode=block - указание браузеру о включенной защите от XSS и указывает ему блокировать скрипты, которые могут представлять угрозу безопасности

<
* Connection #2 to host www.rzd.ru left intact
```

### Yandex

Для получения запроса с __[Yandex](https://yandex.ru/)__:

`curl yandex.ru -I -k -v -L`

Ниже будут строки и их пояснение:

```shell
*   Trying 5.255.255.77:80...
* Connected to yandex.ru (5.255.255.77) port 80 (#0)
> HEAD / HTTP/1.1
> Host: yandex.ru
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 302 Moved temporarily
HTTP/1.1 302 Moved temporarily
< Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT
Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT
< Cache-Control: max-age=1209600,private
Cache-Control: max-age=1209600,private
< Date: Wed, 01 Nov 2023 20:51:41 GMT
Date: Wed, 01 Nov 2023 20:51:41 GMT
< Location: https://dzen.ru/?yredirect=true
Location: https://dzen.ru/?yredirect=true
< NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}
NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}
< P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
< Portal: Home
Portal: Home
< Report-To: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
Report-To: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
< X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
< X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST
X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST
< X-Yandex-Req-Id: 1698871901234760-16085257104710870688-balancer-l7leveler-kubr-yp-vla-21-BAL-1055
X-Yandex-Req-Id: 1698871901234760-16085257104710870688-balancer-l7leveler-kubr-yp-vla-21-BAL-1055
< set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Fri, 31 Oct 2025 20:51:41 GMT
set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Fri, 31 Oct 2025 20:51:41 GMT
< set-cookie: is_gdpr_b=CIauJRC31wEoAg==; Path=/; Domain=.yandex.ru; Expires=Fri, 31 Oct 2025 20:51:41 GMT
set-cookie: is_gdpr_b=CIauJRC31wEoAg==; Path=/; Domain=.yandex.ru; Expires=Fri, 31 Oct 2025 20:51:41 GMT
< set-cookie: _yasc=Y2w/OyC0hrieDNMkCiRBoAr+sqdOBF6KHzP62dG293AKen83fAleWOYiiUDKy9p/qWo=; domain=.yandex.ru; path=/; expires=Sat, 29 Oct 2033 20:51:41 GMT; secure
set-cookie: _yasc=Y2w/OyC0hrieDNMkCiRBoAr+sqdOBF6KHzP62dG293AKen83fAleWOYiiUDKy9p/qWo=; domain=.yandex.ru; path=/; expires=Sat, 29 Oct 2033 20:51:41 GMT; secure

<
* Connection #0 to host yandex.ru left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://dzen.ru/?yredirect=true'
*   Trying 62.217.160.2:443...
* Connected to dzen.ru (62.217.160.2) port 443 (#1)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD /?yredirect=true HTTP/1.1
> Host: dzen.ru
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 Ok
HTTP/1.1 200 Ok
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Content-Security-Policy: frame-ancestors sq2.go.mail.ru metrika.yandex.ru webvisor.com; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=9143437151698871901&requestid=743332087.214.1698871901459.29190&page=site_desktop;
Content-Security-Policy: frame-ancestors sq2.go.mail.ru metrika.yandex.ru webvisor.com; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=9143437151698871901&requestid=743332087.214.1698871901459.29190&page=site_desktop;
< Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' an.yandex.ru strm.yandex.ru *.strm.yandex.net mc.yandex.ru yandex.st yastatic.net matchid.adfox.yandex.ru adfox.yandex.ru ads.adfox.ru ads6.adfox.ru jstracer.yandex.ru yastat.net yandex.ru awaps.yandex.net awaps.yandex.ru verify.yandex.ru *.verify.yandex.ru favicon.yandex.net pixel.adsafeprotected.com tps.doubleverify.com ad.adriver.ru amc.yandex.ru *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.admetrica.ru yandexmetrica.com yandexmetrica.com:29009 yandexmetrica.com:30102 forms-ext-api.yandex.ru strm.yandex.net *.strm.yandex.ru *.cdn.ngenix.net zen-rc3.yandex.ru frontend.vh.yandex.ru https://vh.test.yandex.ru/live/ wss://push.yandex.ru api.passport.yandex.ru api.passport-test.yandex.ru suggest-maps.yandex.ru/suggest-geo vk.ru static.dzeninfra.ru avatars.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru cdn.dzeninfra.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru s3.dzeninfra.ru *.s3.dzeninfra.ru *.ms.dzen.ru notify.dzen.ru clck.dzen.ru static-mon.yandex.net cloud-api.yandex.ru yandex.ru dzen.ru *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.serving-sys.com *.serving-sys.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; frame-src awaps.yandex.net yandexadexchange.net *.yandexadexchange.net yastatic.net *.yandex.ru banners.adfox.ru yastat.net yandex.ru storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: mc.yandex.ru mc.yandex.md zenadservices.net sso.passport.yandex.ru id.vk.com *.dzen.ru sso.dzen.ru static.dzeninfra.ru suggest.dzen.ru 'self' yandex.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.doubleclick.net; img-src 'self' data: avatars-fast.yandex.net favicon.yandex.net an.yandex.ru banners.adfox.ru content.adfox.ru ads6.adfox.ru tns-counter.ru *.tns-counter.ru s3.mds.yandex.net ads.adfox.ru amc.yandex.ru mc.admetrica.ru wcm-ru.frontend.weborama.fr wcm.solution.weborama.fr ad.adriver.ru bs.serving-sys.com ad.doubleclick.net counter.yadro.ru gdeby.hit.gemius.pl mc.yandex.ru verify.yandex.ru *.verify.yandex.ru yastatic.net yastat.net avatars.mds.yandex.net yandex.ru px.moatads.com awaps.yandex.net awaps.yandex.ru gdero.hit.gemius.pl pixel.adlooxtracking.com tps.doubleverify.com impression.appsflyer.com rgi.io track.rutarget.ru ssl.hurra.com pixel.adsafeprotected.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.org *.mediascope.mc.yandex.ru avatars.mdst.yandex.net zen.s3.yandex.net strm.yandex.ru strm.yandex.net sso.passport.yandex.ru dzen.ru avatars.dzeninfra.ru static.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru s3.dzeninfra.ru *.ms.dzen.ru *.s3.dzeninfra.ru *.zen.yandex.com *.m-counter.ru www.m-counter.ru www.tns-counter.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.adsafeprotected.com *.serving-sys.com *.serving-sys.ru *.weborama.fr *.weborama-tech.ru *.hit.gemius.pl consentmanager.mgr.consensu.org cdn.consentmanager.mgr.consensu.org *.adlooxtracking.com *.adlooxtracking.ru vk.com vk.ru *.userapi.com *.vk.com *.vk.ru; media-src *.yandex.net strm.yandex.ru *.strm.yandex.ru yandex.ru yandex.st yastatic.net banners.adfox.ru content.adfox.ru data: yastat.net *.mycdn.me *.vkuser.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: *.strm.yandex.net *.cdn.ngenix.net cdn.dzen.ru video.dzen.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru *.s3.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net; script-src 'unsafe-inline' 'unsafe-eval' an.yandex.ru yandex.st yastatic.net mc.yandex.ru banners.adfox.ru ads.adfox.ru ads6.adfox.ru yastat.net yandex.ru z.moatads.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz chat.s3.yandex.net sso.dzen.ru sso.passport.yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.dvtps.com *.doubleclick.net *.serving-sys.ru *.userapi.com vk.com vk.ru *.vk.com *.vk.ru; style-src 'unsafe-inline' 'unsafe-eval' yandex.st yastatic.net banners.adfox.ru content.adfox.ru yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; font-src 'self' data: an.yandex.ru yastatic.net yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru static.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net fonts.gstatic.com; child-src blob: mc.yandex.ru; manifest-src *.dzen.ru/manifest.webmanifest 'self'; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=9143437151698871901&requestid=743332087.214.1698871901459.29190&page=site_desktop;
Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' an.yandex.ru strm.yandex.ru *.strm.yandex.net mc.yandex.ru yandex.st yastatic.net matchid.adfox.yandex.ru adfox.yandex.ru ads.adfox.ru ads6.adfox.ru jstracer.yandex.ru yastat.net yandex.ru awaps.yandex.net awaps.yandex.ru verify.yandex.ru *.verify.yandex.ru favicon.yandex.net pixel.adsafeprotected.com tps.doubleverify.com ad.adriver.ru amc.yandex.ru *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.admetrica.ru yandexmetrica.com yandexmetrica.com:29009 yandexmetrica.com:30102 forms-ext-api.yandex.ru strm.yandex.net *.strm.yandex.ru *.cdn.ngenix.net zen-rc3.yandex.ru frontend.vh.yandex.ru https://vh.test.yandex.ru/live/ wss://push.yandex.ru api.passport.yandex.ru api.passport-test.yandex.ru suggest-maps.yandex.ru/suggest-geo vk.ru static.dzeninfra.ru avatars.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru cdn.dzeninfra.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru s3.dzeninfra.ru *.s3.dzeninfra.ru *.ms.dzen.ru notify.dzen.ru clck.dzen.ru static-mon.yandex.net cloud-api.yandex.ru yandex.ru dzen.ru *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.serving-sys.com *.serving-sys.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; frame-src awaps.yandex.net yandexadexchange.net *.yandexadexchange.net yastatic.net *.yandex.ru banners.adfox.ru yastat.net yandex.ru storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: mc.yandex.ru mc.yandex.md zenadservices.net sso.passport.yandex.ru id.vk.com *.dzen.ru sso.dzen.ru static.dzeninfra.ru suggest.dzen.ru 'self' yandex.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.doubleclick.net; img-src 'self' data: avatars-fast.yandex.net favicon.yandex.net an.yandex.ru banners.adfox.ru content.adfox.ru ads6.adfox.ru tns-counter.ru *.tns-counter.ru s3.mds.yandex.net ads.adfox.ru amc.yandex.ru mc.admetrica.ru wcm-ru.frontend.weborama.fr wcm.solution.weborama.fr ad.adriver.ru bs.serving-sys.com ad.doubleclick.net counter.yadro.ru gdeby.hit.gemius.pl mc.yandex.ru verify.yandex.ru *.verify.yandex.ru yastatic.net yastat.net avatars.mds.yandex.net yandex.ru px.moatads.com awaps.yandex.net awaps.yandex.ru gdero.hit.gemius.pl pixel.adlooxtracking.com tps.doubleverify.com impression.appsflyer.com rgi.io track.rutarget.ru ssl.hurra.com pixel.adsafeprotected.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.org *.mediascope.mc.yandex.ru avatars.mdst.yandex.net zen.s3.yandex.net strm.yandex.ru strm.yandex.net sso.passport.yandex.ru dzen.ru avatars.dzeninfra.ru static.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru s3.dzeninfra.ru *.ms.dzen.ru *.s3.dzeninfra.ru *.zen.yandex.com *.m-counter.ru www.m-counter.ru www.tns-counter.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.adsafeprotected.com *.serving-sys.com *.serving-sys.ru *.weborama.fr *.weborama-tech.ru *.hit.gemius.pl consentmanager.mgr.consensu.org cdn.consentmanager.mgr.consensu.org *.adlooxtracking.com *.adlooxtracking.ru vk.com vk.ru *.userapi.com *.vk.com *.vk.ru; media-src *.yandex.net strm.yandex.ru *.strm.yandex.ru yandex.ru yandex.st yastatic.net banners.adfox.ru content.adfox.ru data: yastat.net *.mycdn.me *.vkuser.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: *.strm.yandex.net *.cdn.ngenix.net cdn.dzen.ru video.dzen.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru *.s3.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net; script-src 'unsafe-inline' 'unsafe-eval' an.yandex.ru yandex.st yastatic.net mc.yandex.ru banners.adfox.ru ads.adfox.ru ads6.adfox.ru yastat.net yandex.ru z.moatads.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz chat.s3.yandex.net sso.dzen.ru sso.passport.yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.dvtps.com *.doubleclick.net *.serving-sys.ru *.userapi.com vk.com vk.ru *.vk.com *.vk.ru; style-src 'unsafe-inline' 'unsafe-eval' yandex.st yastatic.net banners.adfox.ru content.adfox.ru yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; font-src 'self' data: an.yandex.ru yastatic.net yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru static.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net fonts.gstatic.com; child-src blob: mc.yandex.ru; manifest-src *.dzen.ru/manifest.webmanifest 'self'; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=9143437151698871901&requestid=743332087.214.1698871901459.29190&page=site_desktop;
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=OB9CUeEZmD5YdL+3DUwvaMgdIV6FhyfKx6l9aIvZZPsJBg15a/JlCjdqlNFb9yoNVg==; domain=.dzen.ru; path=/; expires=Sat, 29 Oct 2033 20:51:41 GMT; secure
Set-Cookie: _yasc=OB9CUeEZmD5YdL+3DUwvaMgdIV6FhyfKx6l9aIvZZPsJBg15a/JlCjdqlNFb9yoNVg==; domain=.dzen.ru; path=/; expires=Sat, 29 Oct 2033 20:51:41 GMT; secure
< X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
< X-Requestid: 743332087.214.1698871901459.29190
X-Requestid: 743332087.214.1698871901459.29190 - указание идентификатора запроса, который может быть полезен для отслеживания запроса на стороне сервера
< X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; mode=block
< X-Yandex-Req-Id: 1698871901433900-1693399073060615616500177-production-app-host-vlx-zen-310
X-Yandex-Req-Id: 1698871901433900-1693399073060615616500177-production-app-host-vlx-zen-310 -  уникальный идентификатор запроса, который полезен для отслеживания запроса на стороне сервера Yandex или системы, которая обрабатывает запросы

<
* Connection #1 to host dzen.ru left intact
```

### Python

Для получения запроса с __[Python](https://www.python.org/)__:

`curl python.org -I -k -v -L`

Ниже будут строки и их пояснение:

```shell
*   Trying 151.101.0.223:80...
* Connected to python.org (151.101.0.223) port 80 (#0)
> HEAD / HTTP/1.1
> Host: python.org
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
HTTP/1.1 301 Moved Permanently
< Connection: close
Connection: close
< Content-Length: 0
Content-Length: 0
< Server: Varnish
Server: Varnish
< Retry-After: 0
Retry-After: 0
< Accept-Ranges: bytes
Accept-Ranges: bytes
< Date: Wed, 01 Nov 2023 21:10:14 GMT
Date: Wed, 01 Nov 2023 21:10:14 GMT
< Via: 1.1 varnish
Via: 1.1 varnish
< X-Served-By: cache-hel1410034-HEL
X-Served-By: cache-hel1410034-HEL
< X-Cache: HIT
X-Cache: HIT
< X-Cache-Hits: 0
X-Cache-Hits: 0
< X-Timer: S1698873014.316047,VS0,VE0
X-Timer: S1698873014.316047,VS0,VE0
< Location: https://www.python.org/
Location: https://www.python.org/
< Strict-Transport-Security: max-age=315360000; preload
Strict-Transport-Security: max-age=315360000; preload

<
* Closing connection 0
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://www.python.org/'
*   Trying 146.75.116.223:443...
* Connected to www.python.org (146.75.116.223) port 443 (#1)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Connection: keep-alive
Connection: keep-alive
< Content-Length: 50406
Content-Length: 50406
< Report-To: {"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1698871609&sid=67ff5de4-ad2b-4112-9289-cf96be89efed&s=N86cgsiY5z5aQab3TjjUDw45Ho1fNgD5WsBTkvXx6HI%3D"}]}
Report-To: {"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1698871609&sid=67ff5de4-ad2b-4112-9289-cf96be89efed&s=N86cgsiY5z5aQab3TjjUDw45Ho1fNgD5WsBTkvXx6HI%3D"}]}
< Reporting-Endpoints: heroku-nel=https://nel.heroku.com/reports?ts=1698871609&sid=67ff5de4-ad2b-4112-9289-cf96be89efed&s=N86cgsiY5z5aQab3TjjUDw45Ho1fNgD5WsBTkvXx6HI%3D
Reporting-Endpoints: heroku-nel=https://nel.heroku.com/reports?ts=1698871609&sid=67ff5de4-ad2b-4112-9289-cf96be89efed&s=N86cgsiY5z5aQab3TjjUDw45Ho1fNgD5WsBTkvXx6HI%3D
< Nel: {"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}
Nel: {"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}
< Server: nginx
Server: nginx
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
Accept-Ranges: bytes
< Date: Wed, 01 Nov 2023 21:10:14 GMT
Date: Wed, 01 Nov 2023 21:10:14 GMT
< Age: 1393
Age: 1393 - указание на время в секундах, прошедшее с момента кэширования ответа на сервере или прокси
< X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230021-FRA
X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230021-FRA - указание на серверы и прокси, которые обслуживали запрос
< X-Cache: HIT, HIT
X-Cache: HIT, HIT - указание что ответ был получен из кэша как минимум дважды
< X-Cache-Hits: 4, 3
X-Cache-Hits: 4, 3 - указание на количество "попаданий" в кэш для данного запроса
< X-Timer: S1698873015.578116,VS0,VE0
X-Timer: S1698873015.578116,VS0,VE0 - содержит информацию о времени, затраченном на обработку запроса на сервере
< Vary: Cookie
Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

<
* Connection #1 to host www.python.org left intact
```

### Git

Для получения запроса с __[Git](hhttps://git-scm.com/)__:

`curl git-scm.com -I -k -v -L`

Ниже будут строки и их пояснение:

```shell
*   Trying 188.114.98.224:80...
* Connected to git-scm.com (188.114.98.224) port 80 (#0)
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
HTTP/1.1 301 Moved Permanently
< Date: Wed, 01 Nov 2023 21:59:54 GMT
Date: Wed, 01 Nov 2023 21:59:54 GMT
< Connection: keep-alive
Connection: keep-alive
< Cache-Control: max-age=3600
Cache-Control: max-age=3600
< Expires: Wed, 01 Nov 2023 22:59:54 GMT
Expires: Wed, 01 Nov 2023 22:59:54 GMT
< Location: https://git-scm.com/
Location: https://git-scm.com/
< Server: cloudflare
Server: cloudflare
< CF-RAY: 81f768560daa1660-DME
CF-RAY: 81f768560daa1660-DME

<
* Connection #0 to host git-scm.com left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://git-scm.com/'
*   Trying 188.114.98.224:443...
* Connected to git-scm.com (188.114.98.224) port 443 (#1)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Date: Wed, 01 Nov 2023 21:59:54 GMT
Date: Wed, 01 Nov 2023 21:59:54 GMT
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8
< Connection: keep-alive
Connection: keep-alive
< Report-To: {"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1698790562&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=1nmhELiXFhrzBg1Ng4C4bp0RSUE5ejc9BwH6t%2FmZ3iQ%3D"}]}
Report-To: {"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1698790562&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=1nmhELiXFhrzBg1Ng4C4bp0RSUE5ejc9BwH6t%2FmZ3iQ%3D"}]}
< Reporting-Endpoints: heroku-nel=https://nel.heroku.com/reports?ts=1698790562&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=1nmhELiXFhrzBg1Ng4C4bp0RSUE5ejc9BwH6t%2FmZ3iQ%3D
Reporting-Endpoints: heroku-nel=https://nel.heroku.com/reports?ts=1698790562&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=1nmhELiXFhrzBg1Ng4C4bp0RSUE5ejc9BwH6t%2FmZ3iQ%3D
< Nel: {"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}
Nel: {"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}
< X-Frame-Options: SAMEORIGIN
X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
< X-Download-Options: noopen
X-Download-Options: noopen - указывание, что файлы не должны открываться автоматически после загрузки
< X-Permitted-Cross-Domain-Policies: none
X-Permitted-Cross-Domain-Policies: none - указывание, что политики, связанные с кросс-доменными запросами, отсутствуют
< Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: public, max-age=14400
Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< X-Request-Id: 6ce161f5-fc37-449e-8e82-d5ff2a7368bd
X-Request-Id: 6ce161f5-fc37-449e-8e82-d5ff2a7368bd
< X-Runtime: 0.010237
X-Runtime: 0.010237 - указание на время, затраченное на выполнение запроса на стороне сервера
< Via: 1.1 vegur
Via: 1.1 vegur
< CF-Cache-Status: HIT
CF-Cache-Status: HIT
< Age: 13050
Age: 13050
< Server: cloudflare
Server: cloudflare
< CF-RAY: 81f76856efe13a8f-DME
CF-RAY: 81f76856efe13a8f-DME -  содержит информацию о запросе и обработке на стороне Cloudflare

<
* Connection #1 to host git-scm.com left intact
```

### JetBrains

Для получения запроса с __[JetBrains](https://www.jetbrains.com/)__:

`curl jetbrains.com -I -k -v -L`

Ниже будут строки и их пояснение:

```shell
*   Trying 13.33.243.7:443...
* Connected to www.jetbrains.com (13.33.243.7) port 443 (#2)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD / HTTP/1.1
> Host: www.jetbrains.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8
< Content-Length: 47979
Content-Length: 47979
< Connection: keep-alive
Connection: keep-alive
< Date: Wed, 01 Nov 2023 22:20:46 GMT
Date: Wed, 01 Nov 2023 22:20:46 GMT
< Server: nginx
Server: nginx
< X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
Referrer-Policy: same-origin
< Expires: Wed, 01 Nov 2023 22:20:46 GMT
Expires: Wed, 01 Nov 2023 22:20:46 GMT
< Cache-Control: max-age=0
Cache-Control: max-age=0
< Pragma: no-cache
Pragma: no-cache
< X-Frame-Options: DENY
X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
Vary: Accept-Encoding
< Via: 1.1 b2756db0e58306bee6945607dbb05978.cloudfront.net (CloudFront)
Via: 1.1 b2756db0e58306bee6945607dbb05978.cloudfront.net (CloudFront)
< Alt-Svc: h3=":443"; ma=86400
Alt-Svc: h3=":443"; ma=86400
< Age: 160
Age: 160
< Set-Cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure
Set-Cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: HEL50-C1
X-Amz-Cf-Pop: HEL50-C1 - содержит информацию о Point of Presence CloudFront, через который прошел запрос
< X-Amz-Cf-Id: iPdvbfk0hEjFnCjIfquHlDQt8cQFxImNNyWCZ2tAMLICTuNPISbllg==
X-Amz-Cf-Id: iPdvbfk0hEjFnCjIfquHlDQt8cQFxImNNyWCZ2tAMLICTuNPISbllg== - содержит идентификатор запроса и обработки на стороне CloudFront

```

### VSC

Для получения запроса с __[VSC](https://code.visualstudio.com/)__:

`curl code.visualstudio.com -I -k -v -L`

Ниже будут строки и их пояснение:

```shell
*   Trying 13.107.213.53:80...
* Connected to code.visualstudio.com (13.107.213.53) port 80 (#0)
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 307 Temporary Redirect
HTTP/1.1 307 Temporary Redirect
< Content-Length: 0
Content-Length: 0
< Location: https://code.visualstudio.com/
Location: https://code.visualstudio.com/
< X-Azure-Ref: 0R9JCZQAAAABq96v5MF2YRqqeQqnvgw6tU1RPRURHRTE5MjIAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
X-Azure-Ref: 0R9JCZQAAAABq96v5MF2YRqqeQqnvgw6tU1RPRURHRTE5MjIAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
< Date: Wed, 01 Nov 2023 22:33:43 GMT
Date: Wed, 01 Nov 2023 22:33:43 GMT

<
* Connection #0 to host code.visualstudio.com left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://code.visualstudio.com/'
*   Trying 13.107.213.53:443...
* Connected to code.visualstudio.com (13.107.213.53) port 443 (#1)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Content-Length: 49674
Content-Length: 49674
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8
< Accept-Ranges: bytes
Accept-Ranges: bytes
< ETag: W/"c20a-Ub8EbOEvtPIPmMjpd0TNSw+pDFs"
ETag: W/"c20a-Ub8EbOEvtPIPmMjpd0TNSw+pDFs"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self'
Content-Security-Policy: frame-ancestors 'self' - определение политику безопасности контента и разрешает встраивание ресурсов только с текущего домена
< X-Frame-Options: SAMEORIGIN
X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
X-Powered-By: ASP.NET
< x-azure-ref: 0R9JCZQAAAAC40SsuUxjkRL+4HHz7tvVAU1RPRURHRTE0MTYAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
x-azure-ref: 0R9JCZQAAAAC40SsuUxjkRL+4HHz7tvVAU1RPRURHRTE0MTYAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
< X-Cache: CONFIG_NOCACHE
X-Cache: CONFIG_NOCACHE
< Date: Wed, 01 Nov 2023 22:33:43 GMT
Date: Wed, 01 Nov 2023 22:33:43 GMT

<
* Connection #1 to host code.visualstudio.com left intact
```
