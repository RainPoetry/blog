/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2018/09/15/Cron 表达式解析/index.html","d896a616dd87189bfccfb1b9297ca2c1"],["/blog/2018/09/15/rpc 框架的简单设计/index.html","8f4c1fd0376596661f32a16671edf307"],["/blog/2018/09/28/java/desinmodel/index.html","c46f07dcbbf2187c9fb6c97292432267"],["/blog/2018/09/28/java/nio/index.html","73022effadb040466f4ac7dbce547ecb"],["/blog/2018/09/28/java/nio/muilt_reactors.png","f52a6ecdab1ec842d4b95cbfdfb4e163"],["/blog/2018/09/28/java/nio/reactor.png","c17bbd5318bf16a134a93523cba6ba29"],["/blog/2018/09/28/java/nio/threadpool.png","94143b3434372c48bc45872ea3f94d3e"],["/blog/2018/10/28/kafka/producer_init/ProducerConfig.png","75b14238bee9f3e13440eb34235d1aa9"],["/blog/2018/10/28/kafka/producer_init/channel.png","07e105ab2f972c711df5f3f192ee17df"],["/blog/2018/10/28/kafka/producer_init/index.html","40c2710cfbe1ced6915069ea836e379f"],["/blog/2018/10/28/kafka/producer_init/producer_init.png","d908ac8324e4976b8b9828b16078c491"],["/blog/2018/11/12/kafka/producer_dataDeal/BufferPool.png","605407c53d0c7a57793f39e95865d2a8"],["/blog/2018/11/12/kafka/producer_dataDeal/bufferpool_allocate.png","4c08ba891e1d7974c4c8d10b339c23bc"],["/blog/2018/11/12/kafka/producer_dataDeal/index.html","010a92740a2643de8eddce6ac4045e69"],["/blog/2018/11/12/kafka/producer_dataDeal/producer_data_cache.png","1fdd3a5caf7ac1099f354841ad1ca274"],["/blog/2018/11/15/kafka/producer_order/index.html","d2fd7cc558fa81b69b8c3246b887ff4e"],["/blog/2018/11/15/kafka/producer_order/prodcer_net_order.png","3b434151a84da261f9cdcc265d4fa6d8"],["/blog/about/index.html","9dadbe55490099e7a7fbc943b4386b8f"],["/blog/archives/2018/09/index.html","4b15ccee0e60fd7da9ee0b39ead4ba91"],["/blog/archives/2018/10/index.html","9ea9d4812a0a69f808cb5700c7a13b52"],["/blog/archives/2018/11/index.html","18882743017f7f10140df533d46b45aa"],["/blog/archives/2018/index.html","b71fb62aad352b48aec53876d45819d7"],["/blog/archives/index.html","b70c5b534694b61a4ae7855b6b904353"],["/blog/article/java/nio/reactor.png","22efc734724d07251f8293e2f1143639"],["/blog/categories/cron/index.html","3b439e0383bfdae8e71f5103fd5bc8c5"],["/blog/categories/cron/others/index.html","a5fef24cf45bf50fd9ceb74e57a769c6"],["/blog/categories/index.html","672087f33651b659363dd7b98bc9adec"],["/blog/categories/java/index.html","9cd8072af819b637e3a3aef501157972"],["/blog/categories/kafka/index.html","0b59d31574ca50893634d4775e383e01"],["/blog/categories/rpc/index.html","a28f01b940150fae38515a554bdff3b4"],["/blog/css/main.css","68ae18764e7b0cbcd50b10f382c67c6b"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/blog/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","ccbf1b45269df46c5933e47124d511d9"],["/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/blog/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/blog/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/blog/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/jquery_lazyload/README.html","83aafb2849df1ec364a069c2c7115090"],["/blog/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/blog/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/blog/lib/pace/README.html","af8b6617818b91c94a4f1e05e0eae22f"],["/blog/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/blog/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/blog/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/blog/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/blog/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/blog/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/blog/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/blog/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/blog/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/blog/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/blog/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/blog/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/blog/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/blog/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/blog/lib/source/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/blog/lib/source/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/blog/lib/source/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/blog/lib/source/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/blog/lib/source/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/blog/lib/source/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/sw-register.js","ba38238176108ebe6dadbd4299dd92cb"],["/blog/tags/ProtoStuff/index.html","1a7eedf6379c913a22a79fb3de3cd4d3"],["/blog/tags/cron/index.html","fac14c0c1e9af5a0ea8b898719eaefc9"],["/blog/tags/index.html","64ecdd0b061200934288b1b8fdb79abc"],["/blog/tags/java/index.html","4c8e75ba3701a6b9e78247abdd67038c"],["/blog/tags/kafka/index.html","323a0ac2c140c3ad7a191102665f47b8"],["/blog/tags/netty/index.html","b879ab9e5b19825ba4fa986de364ad11"],["/blog/tags/nio/index.html","10741f328cc526edc45b18dcfb6a8236"],["/blog/tags/producer/index.html","dc33d8b142628554877bf650af8f10ea"],["/blog/tags/zookeeper/index.html","e96e8de5404682fb9f967347201601c6"],["/blog/tags/数据处理/index.html","bfe6b5dda6ff1539edf53ec8483c951f"],["/blog/tags/解析/index.html","4cdb0c7aa331ca931a2dd1f2a631fcd7"],["/blog/tags/设计模式/index.html","92461e3c54b8be8a4bfe932bc68db048"],["/blog/tags/配置信息管理/index.html","3a13cbe188a19b496216a2245110cdd2"],["/blog/upload/bg.jpg","a223320faa8e90b182d1001213ec8483"],["/blog/upload/head.jpg","59fd2dc8da4b2bc4e92b8bdcb2dad7b7"],["/blog/upload/right.jpg","6d716bdfed5a04ee83f02e192dcbc4d6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
