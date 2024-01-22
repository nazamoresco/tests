'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "db9b455094bb834fa4b58fd29e7fc261",
"index.html": "8ebc5b0158115a84228e67b8abf100ae",
"/": "8ebc5b0158115a84228e67b8abf100ae",
"main.dart.js": "5ad1db98ab324156921bb2a42dc7a2f1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f33f9cb8ba20cfa1a5bf26feccdcc16",
"assets/AssetManifest.json": "102f6dcaef74a33d6b6d0226b90e66d8",
"assets/NOTICES": "5cb86ec754e16a80c19cfc8cd1db7ec4",
"assets/FontManifest.json": "6e22fce7d6eeeebc5b4da6213fcdab63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1c26beb8b413e8f1e49f8d050195555f",
"assets/fonts/MaterialIcons-Regular.otf": "7bff7b03c7b17c9043751eb7a423fa1f",
"assets/assets/images/parcela_infectada_2.png": "770bc490eb2f8eb145fdd76a53f3faa1",
"assets/assets/images/1080_calavera.png": "e8307f60a3ec5bfdddd1490504b6aeef",
"assets/assets/images/avioneta_v2_3.png": "2bae263d18fa8a506dd9dd418bec24d2",
"assets/assets/images/fondo_completo_sin_nubes.png": "556b760b78b6cdb3803482a5e4e0b796",
"assets/assets/images/avioneta_v2_2.png": "891a9c6203c5bf3ae50593ceda46d55b",
"assets/assets/images/parcela_infectada_3.png": "9f3e695d9fae7fef2e0e188c6e39b899",
"assets/assets/images/parcela_infectada_1.png": "653fa6223c2ae39b55eaf8c6c65dc15e",
"assets/assets/images/icono_maiz.png": "b13fd585c357ace371e8f0d7388cfb84",
"assets/assets/images/brote_1_solo.png": "58a56e4cdbe6c8d153c13700493732f9",
"assets/assets/images/estaciones_PRIMAVERA.png": "f5ce986d95f742501ad9e08eee0a9b27",
"assets/assets/images/beef_with_tomato.png": "ecd7e64751925429cc65370fbcdd9a94",
"assets/assets/images/cultivo_muerto.png": "af2e13579b4bb880a27fa43d2b341a25",
"assets/assets/images/avioneta_v2_1.png": "bed208faffd30aa8cd34c8124b9a41a3",
"assets/assets/images/parcela_infectada_4.png": "552f9bd7ad0342fdd9580b80fb70e4ff",
"assets/assets/images/icono_fumigar_1.png": "a4e1f527a0d755e092f2af9d9749f475",
"assets/assets/images/720_fondo.png": "6f8cc5731641a415587dd6fbc3f2a1a9",
"assets/assets/images/fondo_recorte_1080p.png": "0e7012e5d74b0a88cb895c573997ab9c",
"assets/assets/images/avioneta_v2_4.png": "c3af5c87477264fa395f75a47367772a",
"assets/assets/images/icono_fumigar_2.png": "3417060844c84f1d293de2936c66a152",
"assets/assets/images/3_tierra_muerta.png": "012e19cf2c9a9961a7d02dfff9fdf17b",
"assets/assets/images/1080_fondo.png": "e14e2bbff3be5f83b2c929503d9ac554",
"assets/assets/images/zanahoria_1.png": "2eb177d6837137a510d2912ce6daf58b",
"assets/assets/images/rucula_2.png": "6dc9697834f82b1f653df6933d318695",
"assets/assets/images/pie_de_dialogo_5.png": "192e9aa9b2a5a26552fdcef761cfe9f8",
"assets/assets/images/avioneta_v1_2.png": "3a2c34e2ea1a38ce05cf343d4e976b6f",
"assets/assets/images/1080_game%2520over.png": "08cc9df74516e04175d1d1606092d9e1",
"assets/assets/images/fileteado_esquina_4.png": "51f1b5b138246c2a38854a7ea0830076",
"assets/assets/images/deco_1.png": "7c8db6deb3817cf5570007a14fae8be8",
"assets/assets/images/carrot_pie.png": "e829034c225be217bf09ceabad38403a",
"assets/assets/images/icono_recetas_2.png": "d366111e2bac73bcfe33404bb8406d95",
"assets/assets/images/pie_de_dialogo_4.png": "befb9bd758f6fb21ac8fc7731e45cc14",
"assets/assets/images/avioneta_v1_3.png": "88627d7c40192ef7d4377db0accc95e4",
"assets/assets/images/rucula_3.png": "559193bee4c42e5bb9d7a998e14f6917",
"assets/assets/images/zanahoria_0.png": "e95e612b7fe7d230997d9359a97a6fd5",
"assets/assets/images/rucula_1.png": "93d5a398254b90905805040d9cb55038",
"assets/assets/images/zanahoria_2.png": "f843915db44087ea05b795d6abd53f4a",
"assets/assets/images/avioneta_v1_1.png": "61b5f736b24f9e5bb93d227f10ea24df",
"assets/assets/images/personaje_grande.png": "43cb5f4af7efe09ac9e98b6ba5a3aff1",
"assets/assets/images/deco_2.png": "230f9e61d5b7bdc6c89b91f179ce2081",
"assets/assets/images/deco_3.png": "8ff86d92c7e19224c7a80743c7b19c23",
"assets/assets/images/icono_recetas_1.png": "4eaeccab14ad6591b58a74e7687fc543",
"assets/assets/images/zanahoria_3.png": "2596fdbc6758e8e495e16bffba8c7a3d",
"assets/assets/images/rucula_0.png": "a0c8f7e27a43136cb26464a120de4136",
"assets/assets/images/maiz_4_solo.png": "2d33b14c68d7b17b2c7481d2dacf4aba",
"assets/assets/images/pie_de_dialogo_3.png": "70316ce514f4c41cecef14fc8e3ce18d",
"assets/assets/images/avioneta_v1_4.png": "cf3f28e29351f2b924f9c4c93f8b1722",
"assets/assets/images/fileteado_esquina_2.png": "17a33284f796bd3653e644ca9f223856",
"assets/assets/images/deco_7.png": "8bf3a99d1897bd572f5f3b0bb11500eb",
"assets/assets/images/deco_6.png": "8c29c215168d1a41044a6aba915fb77b",
"assets/assets/images/fileteado_esquina_3.png": "c07844d95b77492615799c1867716c37",
"assets/assets/images/pie_de_dialogo_2.png": "df5442e1384c9400eb673dd27a2adaef",
"assets/assets/images/estaciones_VERANO.png": "b6d97cf410f8f8b3fb617d0a9aff89b3",
"assets/assets/images/tomate_4_solo.png": "c3f7edb2a40fcac27927c669b4f0be56",
"assets/assets/images/fileteado_esquina_1.png": "454ac2512bc8bbcdbe63aca34c86e2e7",
"assets/assets/images/1080_pantalla%2520muerte.png": "8ef8c9ecaa97f54965bee63c5455debb",
"assets/assets/images/deco_4.png": "376efe49271a9e1ea837c19a8c6e6e24",
"assets/assets/images/deco_5.png": "145962f73d4f9d22df4abed80804d752",
"assets/assets/images/pie_de_dialogo_1.png": "237f7bb108d53022eeef555fdfeb1399",
"assets/assets/images/fondo_completo_con_nubes.png": "bdf83b03c80d95cbc1534423a19d6c9b",
"assets/assets/images/heart.png": "e355288d98af493415a6e32c27939e35",
"assets/assets/images/maiz_2.png": "c6a736124e3e2de3d1ab86cb60e8173d",
"assets/assets/images/deco_11.png": "86a5dab5172e79600b678e756a9d9537",
"assets/assets/images/deco_8.png": "6d46426b6709630a04b4bb0efa827184",
"assets/assets/images/deco_9.png": "671b156336f6da21598ecb67f57b2595",
"assets/assets/images/deco_10.png": "487d92aa9bf283c6a5dab43437301d81",
"assets/assets/images/maiz_3.png": "a2b36975b346c7202f08612d1516e281",
"assets/assets/images/maiz_1.png": "07ff18579b9ceaa6ebc3b8c8f3c73c7d",
"assets/assets/images/deco_12.png": "6f8f8e2d5c01ae62fe933d3703acd4dd",
"assets/assets/images/deco_13.png": "d3df432b55dc96573fcd1ba7ac54d3ac",
"assets/assets/images/maiz_0.png": "363775bf21158e67feff75b89ecfcdd3",
"assets/assets/images/deco_0_GRANDE.png": "6af0700adfbc35f329002890fb826954",
"assets/assets/images/2_tierra_brote.png": "cfd94efd4cfa3ed9d5e92b1aa6c5b327",
"assets/assets/images/icono_tomate.png": "60aeb57567f530da81cd0a85a83f7b0c",
"assets/assets/images/720_calavera.png": "b603fab7e81e64fb89ec6134ed2a8315",
"assets/assets/images/cotiledones_1.png": "0168365548436ed0f82f44236de66243",
"assets/assets/images/zanahoria_4_sola.png": "41aba51443f38003e0ae789cb781da7e",
"assets/assets/images/1_tierra_sembrada.png": "e68e0f3d15fb4d41566a3021125b7c7b",
"assets/assets/images/estaciones_INVIERNO.png": "fa0e105c66c8fd8323ec45490dbbd155",
"assets/assets/images/720_pantalla%2520muerte.png": "0275ec8199fc7285514a1063e0e4a71a",
"assets/assets/images/720_game%2520over.png": "62174845479e1fb0ab367f3f686acf66",
"assets/assets/images/0_tierra_pelada.png": "5175c29266c3bec5c7e06a8e339c76e0",
"assets/assets/images/casa_camioneta(boceto).png": "72f74ba0d5bf345c8314727cb52c6be8",
"assets/assets/images/tomate_3.png": "03319de3285ebdd76ac95bdae3d58d0e",
"assets/assets/images/fileteado_completo.png": "723bb271e5e0a6ddbf8ed202bb623111",
"assets/assets/images/fileteado_vertical_1.png": "97092671812cfa32825a4ebd6a4476db",
"assets/assets/images/fileteado_horizontal_4.png": "4a04ffcb704c66b4a41fe2389b4c96c0",
"assets/assets/images/720_pasto.png": "e50156a505300f7bf803af6eeb9e9bbd",
"assets/assets/images/tomate_2.png": "b8af0d491a709204bf51418f4a6a4c30",
"assets/assets/images/estaciones_OTO%25C3%2591O.png": "77257e467f7ec8e8daea93114ceeb5b1",
"assets/assets/images/tomate_0.png": "c63357acbfac649e452099325025bf06",
"assets/assets/images/1080_pasto.png": "56748ef5108f9302763189d5552dab41",
"assets/assets/images/fileteado_vertical_3.png": "8b529daed0ddf01ac54ba358962ed93e",
"assets/assets/images/fileteado_vertical_2.png": "3b5d1109c27ae610d3617dc5f4292289",
"assets/assets/images/tomate_1.png": "37174dbfb16d91267eedeab3062bfdef",
"assets/assets/images/fileteado_horizontal_3.png": "9dc929d1da6432e2624fcbf980d25f30",
"assets/assets/images/icono_zanahoria.png": "8c25c462221dab6c1a8a3e585785d2cb",
"assets/assets/images/icono_rucula.png": "b01b42b8eb0a569f6f29e03f83bc47ae",
"assets/assets/images/fileteado_horizontal_2.png": "0d80932ac1f9643480ff06e816829c75",
"assets/assets/images/personaje_512.png": "bb849b26c837b42f32f60444cf61cb34",
"assets/assets/images/fileteado_vertical_4.png": "851981e5f7b88439d353098a4c35acb6",
"assets/assets/images/fileteado_horizontal_1.png": "c0b08c5473117030874bc6ae2668bb8e",
"assets/assets/images/nubes_panor%25C3%25A1mica.png": "fac4e2dd213dfe4a843ba5bba1e70b9d",
"assets/assets/images/fondo_plano_1080p.png": "70c81b9469a7b9e36ddb4ebc63aebfcd",
"assets/assets/audio/plane.ogg": "daff60cf01e15bb2e7397c55c8f8f068",
"assets/assets/audio/touch.wav": "878d556ff80c562c42daf2a395b6ee19",
"assets/assets/audio/heartbeat.mp3": "52db9c69fefe77865d63176f0e097d2c",
"assets/assets/audio/music.mp3": "a041a9c530378af2569c901e917a5b0c",
"assets/assets/audio/seed-planting.mp3": "b91173839bfdb8a2ac64199e02bea3a8",
"assets/assets/fonts/Crayonara-Regular.ttf": "fb872c9fdc3d682b63282e3ad99a2e73",
"assets/assets/fonts/CrayonLibre.ttf": "037629160949f5385a5071bc8bae37b0",
"assets/assets/fonts/CrayonHandRegular2016Demo.ttf": "a24ea7259380d29bc41727123c8d50ac",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
