'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "789838ba59b6e5c3162aaa3ccf6e8da5",
"index.html": "a1b04b33ffbaa29e99d845cf10956a1d",
"/": "a1b04b33ffbaa29e99d845cf10956a1d",
"main.dart.js": "21594ca198df04ef476db8715ce9eb21",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "64f4426e02116c734d7846518025e88d",
"assets/AssetManifest.json": "d719b97da41a3e2f139554b7dac85419",
"assets/NOTICES": "a388526b1af0a80e3e3b39f11c1a8b40",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1ee043dea867307b6f35d87120ccd7d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "59946d088d1edc4dd60fc492723933a7",
"assets/fonts/MaterialIcons-Regular.otf": "402087f43f71c3502da18be47bbb2e24",
"assets/assets/images/globalImages/btn.png": "937ab4827b1db847cf9a1bb3b34b53fb",
"assets/assets/images/globalImages/full_logo.png": "a687a6b3e18b62c18d571992a893c0aa",
"assets/assets/images/globalImages/plane_rope.png": "715aec7099a441481bc31b2f5e6f5787",
"assets/assets/images/globalImages/high_frame.png": "2084daaf5ee6b217b8d9dde4d3cc57fd",
"assets/assets/images/globalImages/background.png": "bb63613a91427bb873ad7e0d2d69d6cb",
"assets/assets/images/globalImages/final_bg_portrait.png": "43cc00dc88e00d3fd974c50a78e77ee7",
"assets/assets/images/globalImages/bg1.png": "bc05430cf1335869c7548210ad0e95d5",
"assets/assets/images/globalImages/bg_final.png": "63e207229bbc6e4a9e3ddc27ad503aef",
"assets/assets/images/globalImages/bg2.png": "96bd3b9b8e52a3676f7b62660c52a192",
"assets/assets/images/globalImages/plane/fan_middle.png": "2bde10c0a49726b2383e97a8d52e96ab",
"assets/assets/images/globalImages/plane/fan_up.png": "34c0c2109093951347266561760e55f3",
"assets/assets/images/globalImages/plane/fan_down.png": "60cf4fab1e1c2424b683b1005f83c4b3",
"assets/assets/images/globalImages/plane/planewithrope.png": "17ee80bc22a1e5fcc8cced946924a29b",
"assets/assets/images/globalImages/plane/boy.png": "01cf5c30c02d33c8d97ffef24fa5e4f1",
"assets/assets/images/globalImages/plane/plane_body.png": "7c3efe9e2bb019c23aed3c2978e40426",
"assets/assets/images/globalImages/btn2.png": "d1c4cb6387978a2724830277422057f4",
"assets/assets/images/globalImages/bb.jpg": "bb7a36ec809edd930bf2c454a1e1172c",
"assets/assets/images/globalImages/btn1.png": "8c0348e2b1ce666fce9b6046f0dc073e",
"assets/assets/images/globalImages/back.png": "bb171a46c190b1a3b651a6b12175de00",
"assets/assets/images/globalImages/bg.png": "ea3993603e336b2c1600a4f84472ef1c",
"assets/assets/images/abcdAlphabetImages/i_small.png": "9c7858828c153d11312fe486815bb38d",
"assets/assets/images/abcdAlphabetImages/K.png": "9f5577181f2ac48bb108ce51d93e7dd1",
"assets/assets/images/abcdAlphabetImages/J.png": "31ad9e334df8aca40e030f2f0805a959",
"assets/assets/images/abcdAlphabetImages/d_small.png": "47f9266757b25f61e89eb28b80096cd1",
"assets/assets/images/abcdAlphabetImages/H.png": "2f73592db680dcd11d065db02af91802",
"assets/assets/images/abcdAlphabetImages/q_small.png": "c73a837636ffc35c4b55ffc13739988c",
"assets/assets/images/abcdAlphabetImages/I.png": "cb9f09f1f1b27c37f3342a233183eb43",
"assets/assets/images/abcdAlphabetImages/Z.png": "e5ed22d317690632d7049a02bcbbee33",
"assets/assets/images/abcdAlphabetImages/z_small.png": "cae62bebd011dfc6e6920ffd3ca0a6c7",
"assets/assets/images/abcdAlphabetImages/M.png": "3b7757f7966f0cb1de95d3c153064b73",
"assets/assets/images/abcdAlphabetImages/o_small.png": "1c3a8ffc9344f9c028ca7e60e741fe4e",
"assets/assets/images/abcdAlphabetImages/L.png": "3ae7aaf4ccbce6804770ab5950d490ee",
"assets/assets/images/abcdAlphabetImages/w_small.png": "4f316f570f2b42f024bcdd955fc85d38",
"assets/assets/images/abcdAlphabetImages/Y.png": "eb066fbcbea004aac665f811ca7ffe84",
"assets/assets/images/abcdAlphabetImages/N.png": "f76d691c600427a643d2a5d87e97e3ef",
"assets/assets/images/abcdAlphabetImages/b_small.png": "fc5a3593da643eb86bd7332ecf605fe8",
"assets/assets/images/abcdAlphabetImages/O.png": "8257269f8860c9cb08abcc22a1aa1bb2",
"assets/assets/images/abcdAlphabetImages/X.png": "f5b916137a9389883f097813ded94dab",
"assets/assets/images/abcdAlphabetImages/h_small.png": "004571ddf4d953fea9ade469650ee37c",
"assets/assets/images/abcdAlphabetImages/e_small.png": "553a704de2f14c93f46b152a8e2d7312",
"assets/assets/images/abcdAlphabetImages/p_small.png": "91afd9d0c2d552f5271687baf0f831e7",
"assets/assets/images/abcdAlphabetImages/n_small.png": "93d7964f533467a787ae83c09faaf03f",
"assets/assets/images/abcdAlphabetImages/v_small.png": "16c1379d341d3ac69b884ad56daf4e50",
"assets/assets/images/abcdAlphabetImages/c_small.png": "9a961001b65d9b5670a2c6d2489a4cbd",
"assets/assets/images/abcdAlphabetImages/k_small.png": "711bf2c343d724f6cbe84e52f68e6301",
"assets/assets/images/abcdAlphabetImages/s_small.png": "7a74883c30c828cf6661f95f5ed1fab6",
"assets/assets/images/abcdAlphabetImages/f_small.png": "125b3bb81375dcd2e5b02b1b7a895835",
"assets/assets/images/abcdAlphabetImages/m_small.png": "2ba7181ea38bc80296e5567680d5862f",
"assets/assets/images/abcdAlphabetImages/x_small.png": "2bdd0c8468fbdbf4c218f82fdde89403",
"assets/assets/images/abcdAlphabetImages/u_small.png": "27ace16318264faf255dba6bfebab0ca",
"assets/assets/images/abcdAlphabetImages/U.png": "9989ae02c3765b83f4600b65e39a7c2f",
"assets/assets/images/abcdAlphabetImages/B.png": "2716fada189d9dc2ee1954f89ac62237",
"assets/assets/images/abcdAlphabetImages/C.png": "bd967a892205fa9b77af64d68d72db71",
"assets/assets/images/abcdAlphabetImages/T.png": "9c7f83504e98c19a7d6afac5e240496e",
"assets/assets/images/abcdAlphabetImages/j_small.png": "4f5978eba9811fdd0512a92ca289c105",
"assets/assets/images/abcdAlphabetImages/V.png": "ab1caf7af5371882c3e4867b9ab081c2",
"assets/assets/images/abcdAlphabetImages/A.png": "67345faea318fe8da6df0a92cad90367",
"assets/assets/images/abcdAlphabetImages/r_small.png": "7cefc7ac5ac128b143ebe5adc3d956fd",
"assets/assets/images/abcdAlphabetImages/W.png": "caa3394d1a970e210e9ce99e3ecf5648",
"assets/assets/images/abcdAlphabetImages/g_small.png": "1a5d90acece5f0abd347019ab6a8c39e",
"assets/assets/images/abcdAlphabetImages/D.png": "777462aaf2aad0f3480afd198b26e10e",
"assets/assets/images/abcdAlphabetImages/S.png": "c91f0707ea0241b86b55dbe413ccfd00",
"assets/assets/images/abcdAlphabetImages/l_small.png": "09fb009f590c5ce1800d2f8527383e57",
"assets/assets/images/abcdAlphabetImages/R.png": "17c42669deb6d4a779881b4229792e4a",
"assets/assets/images/abcdAlphabetImages/E.png": "d9ca7ac5b5e8c0f921db2b8cb81d63fe",
"assets/assets/images/abcdAlphabetImages/y_small.png": "a24d68921e8b5b577c91f32ec299b4de",
"assets/assets/images/abcdAlphabetImages/G.png": "771bbd937189858d79a63caee1aec3d1",
"assets/assets/images/abcdAlphabetImages/P.png": "bd8c82be8c6b3f1a6b13bb8fce4651f6",
"assets/assets/images/abcdAlphabetImages/a_small.png": "f346b1f073aa35c4bfba1305eb324354",
"assets/assets/images/abcdAlphabetImages/Q.png": "444bd0f3be398c440b370a81bf0bac13",
"assets/assets/images/abcdAlphabetImages/F.png": "37018cfba59c91321ae1c5e2ea251f00",
"assets/assets/images/abcdAlphabetImages/t_small.png": "4f8b72e0c1861dcfe520a4f4f1ca620e",
"assets/assets/images/alphabetscreenimages/girl_l_leg.png": "f022d6998ec5d4b3235a9c446e5535b2",
"assets/assets/images/alphabetscreenimages/btn_audio_on.png": "7f41aabcb2e6d3c8899c7ffbd5e1cddd",
"assets/assets/images/alphabetscreenimages/dino_leg_front.png": "5538aa920d48d8f34a5b0d425f5f2bfd",
"assets/assets/images/alphabetscreenimages/full_boy_body.png": "97fd53902b2b19ed970c767524b1a404",
"assets/assets/images/alphabetscreenimages/left_leg_man.png": "0cb97135c9618afe0009e1ee40d4cd32",
"assets/assets/images/alphabetscreenimages/leg_left.png": "8327418d086c74f1bd2f35a49b89fc97",
"assets/assets/images/alphabetscreenimages/dino_body.png": "f3999738ceda60d514839a6729114fdd",
"assets/assets/images/alphabetscreenimages/boy/speak.png": "90992aa7219aea303c6c973fd57a0a7a",
"assets/assets/images/alphabetscreenimages/boy/right_eye_close.png": "7568332a7da822f44bfc37bedb17c14b",
"assets/assets/images/alphabetscreenimages/boy/left_eye_close.png": "9234b55a3f3af847bd3b31b7d404520a",
"assets/assets/images/alphabetscreenimages/dino_leg_back.png": "32334099336c90aff5b0a640b3110e38",
"assets/assets/images/alphabetscreenimages/portrait.png": "0b67c7810c17580e8bf8790f3c229058",
"assets/assets/images/alphabetscreenimages/newscreen/boat_front.png": "802a088ea1db6bfc144a038db56d8cc0",
"assets/assets/images/alphabetscreenimages/newscreen/board_plain.png": "d52dd8ed8998ae49ef8d239c03612fed",
"assets/assets/images/alphabetscreenimages/newscreen/vector_t.png": "4e7f4ca04f3f01f2e574e069ad4f1b3b",
"assets/assets/images/alphabetscreenimages/newscreen/vector_a.png": "8c90fc351a2aa7464d150b2967232eda",
"assets/assets/images/alphabetscreenimages/newscreen/full_bg.png": "7fe6c636c3691fc654dec30674851a62",
"assets/assets/images/alphabetscreenimages/newscreen/ant.png": "8a8becb0c0f97f225b8e33f09d3e5e8f",
"assets/assets/images/alphabetscreenimages/newscreen/boat_back.png": "1a01ee96d80fb3c5c8927ed1a962fba0",
"assets/assets/images/alphabetscreenimages/newscreen/hand.png": "19b39b42ed6b9d37b3a006faf81e2515",
"assets/assets/images/alphabetscreenimages/newscreen/a_capital.png": "897c9b28cdaa1dedfa021d3ee7562fbe",
"assets/assets/images/alphabetscreenimages/newscreen/cloud.png": "d7fbe0707e678e1e4a5ae10a94ca662f",
"assets/assets/images/alphabetscreenimages/newscreen/vector_n.png": "a3b5ff54bcb6d004ac01c21f236402f0",
"assets/assets/images/alphabetscreenimages/newscreen/full_screen.png": "150952c3b2a72bc74c1d53ce3396d0b3",
"assets/assets/images/alphabetscreenimages/newscreen/girl_parts/left_hand.png": "aa0c73f8362a25fcc35f97f3ceff98ed",
"assets/assets/images/alphabetscreenimages/newscreen/girl_parts/neck_and_skirt.png": "c7c4aaad1ae5a60e5c8d1013878974b9",
"assets/assets/images/alphabetscreenimages/newscreen/girl_parts/right_hand.png": "069b13cbcf59ee28abde2b8499ab58f8",
"assets/assets/images/alphabetscreenimages/newscreen/girl_parts/girl_body.png": "7f8b9ad9f2da87ba3ac4c52d356a539d",
"assets/assets/images/alphabetscreenimages/newscreen/girl_parts/t-shirt.png": "562a3b940575f83a2218feba1c6c2db7",
"assets/assets/images/alphabetscreenimages/newscreen/girl_parts/leg.png": "f6e9f53fd8e712d0183bd1a7c27defc1",
"assets/assets/images/alphabetscreenimages/newscreen/girl_parts/head.png": "29652a6469134fb1b8e919c407993942",
"assets/assets/images/alphabetscreenimages/newscreen/a_small.png": "2590ca4126f78f95f37621a7864c25bb",
"assets/assets/images/alphabetscreenimages/body.png": "2a763487d40f47d7147619a9d7e3376c",
"assets/assets/images/alphabetscreenimages/girl_body.png": "1354f1a8547be04015f97f112b4e2b89",
"assets/assets/images/alphabetscreenimages/btn_audio_off.png": "917e044b39b1f4d4ed020644fba58cf0",
"assets/assets/images/alphabetscreenimages/girl_r_leg.png": "a4caecade56c9c5303b92dfbd43322fd",
"assets/assets/images/alphabetscreenimages/btn_previous.png": "2c5c776dcbe3d4030c9e852ee1a387b3",
"assets/assets/images/alphabetscreenimages/btn_next.png": "a5ea48237215f177adb07854f370857d",
"assets/assets/images/alphabetscreenimages/potrait_full_board.png": "b95ae6ac7d84717b0ee30cbc99fd9e40",
"assets/assets/images/alphabetscreenimages/alphabet_full_bg.png": "e7841c294e7183ea2d4b161c7ec00c78",
"assets/assets/images/alphabetscreenimages/cloud.png": "db4ce3b760ddb8e4770c4deed4aa7626",
"assets/assets/images/alphabetscreenimages/potrait_bg.png": "0c0ee4e503d10df60bbc97fb665965e8",
"assets/assets/images/alphabetscreenimages/girl/girl_l_leg.png": "f022d6998ec5d4b3235a9c446e5535b2",
"assets/assets/images/alphabetscreenimages/girl/full_girl_body.png": "88416cc93baf6e5aec54fc2bfac93424",
"assets/assets/images/alphabetscreenimages/girl/girl_body.png": "1354f1a8547be04015f97f112b4e2b89",
"assets/assets/images/alphabetscreenimages/girl/girl_r_leg.png": "a4caecade56c9c5303b92dfbd43322fd",
"assets/assets/images/alphabetscreenimages/board.png": "c052bac8b8724993b50cffbc2eb128b9",
"assets/assets/images/alphabetscreenimages/exit.png": "d3fbd7e5c9c114b5fafb242a42a3d8b7",
"assets/assets/images/alphabetscreenimages/hand_1.png": "206a9dd0ba6719f36233635d7abec514",
"assets/assets/images/alphabetscreenimages/btn_close.png": "80c6d4cf9ff5679c5dfc6054e7e90e48",
"assets/assets/images/alphabetscreenimages/hand_2.png": "967420b002a85d2bb990dcaccfeacea9",
"assets/assets/images/alphabetscreenimages/leg_right.png": "5f54fc967c40c3927738d6adcc3830eb",
"assets/assets/images/right-arrow.png": "3f7366082f0e7f3eb0bfb8faa49c7ce9",
"assets/assets/images/splashimages/splashLogo.png": "0f102298c8bbfa999ab5a17ded53c0cc",
"assets/assets/images/splashimages/0_splash_screen_natrix.png": "3c0d5da04ed0508e4bbd4cefbc25d58d",
"assets/assets/images/splashimages/0_splash_screen_portrait_natrix.png": "f85305600b7a1f6e43af2040cd8e5868",
"assets/assets/images/splashimages/natrixlogo.png": "8d83e619cd738e884b5bf2bd4b7ddbca",
"assets/assets/images/splashimages/p_splash_screen.png": "ad673677c90486b848bb519f0e6d2090",
"assets/assets/images/splashimages/l_splash_screen_portrait.png": "100b4983008a7c8833464d4544139e2b",
"assets/assets/images/right-arrow%2520(1).png": "692460265a1830dab53e943b4d08259b",
"assets/assets/images/cloud.png": "b5d3f9661cd761e18b9456b83cef1e33",
"assets/assets/images/loading_bar/stroke_background.png": "9f9e8f7b91e8cc0b14adc3428abbaf0e",
"assets/assets/images/loading_bar/stroke_and_leaves.png": "ee4e25e3f3b789f497319ea150b045b8",
"assets/assets/images/loading_bar/loading_bar_half.png": "c2001b4a6f9bf0b3beaac0e505f1a625",
"assets/assets/images/loading_bar/loading_bar_full.png": "48d18a3473526b09d4276783b15700c6",
"assets/assets/images/loading_bar/full_loading_bg.png": "eb1c3d96f81716edd5cf754b3638cf00",
"assets/assets/images/perrot.png": "56325e2e364376cf01582704e0cc35c8",
"assets/assets/images/next.png": "29652fc6896e069708df9e89114d038b",
"assets/assets/images/alphabetImages/parrot.png": "ad2eba3d1732fff5a0daa32a5bb61c53",
"assets/assets/images/alphabetImages/dog.png": "822fe9f4cc09279e1bcfbde5214852ea",
"assets/assets/images/alphabetImages/fan.png": "04be31628c92e61b1136cbff58201ec9",
"assets/assets/images/alphabetImages/king.png": "5151cff1a01894a1397869dfb6fe4464",
"assets/assets/images/alphabetImages/rabbit.png": "9b89be49b83a499242b1fe06c7e65bd0",
"assets/assets/images/alphabetImages/queen.png": "3254b67221e62245ee5d627962291722",
"assets/assets/images/alphabetImages/yak.png": "0e696d1ef21111115a93f03829eceb75",
"assets/assets/images/alphabetImages/jug.png": "9101564da2e45114aa82fc1c91009f82",
"assets/assets/images/alphabetImages/ink-1.png": "57cedd48a5883e5505061a69841b7381",
"assets/assets/images/alphabetImages/unicorn.png": "42246c759717eb737606b154bd80cd44",
"assets/assets/images/alphabetImages/turtle.png": "283b53cc7ad1554afebaaf7e1608af72",
"assets/assets/images/alphabetImages/ink-3.png": "d110d4ee9147a9e7999d6736aad2972f",
"assets/assets/images/alphabetImages/ink-2.png": "75dc8014124597885704b7a52c6dda4d",
"assets/assets/images/alphabetImages/hat.png": "7842d3078c539aba40a69fb9692c14c3",
"assets/assets/images/alphabetImages/ball.png": "0198b90272089b95d0500f72f7f2d971",
"assets/assets/images/alphabetImages/elephant.png": "a119c85040a2feeba370398486d5ef23",
"assets/assets/images/alphabetImages/lion.png": "ec70e47a8c79d5acac28cf5ab2463a97",
"assets/assets/images/alphabetImages/ink-4.png": "13d754b34200cb4fd601f917ad42cab3",
"assets/assets/images/alphabetImages/helicopter.png": "71a37729962e517a98b5e2cf5b19d934",
"assets/assets/images/alphabetImages/apple%2520copy.png": "293d23d3e3a1ddbb8c3bfa484230172a",
"assets/assets/images/alphabetImages/stroke/parrot.png": "c57d1953ce8a714e21eec80daf27c3ad",
"assets/assets/images/alphabetImages/stroke/dog.png": "a820d6605a267ae076844cf0e27b8638",
"assets/assets/images/alphabetImages/stroke/fan.png": "04be31628c92e61b1136cbff58201ec9",
"assets/assets/images/alphabetImages/stroke/king.png": "4ca9128b5d30f78540c36d738150a22e",
"assets/assets/images/alphabetImages/stroke/rabbit.png": "bd3653af15c1cdd5c22c9772c7049d71",
"assets/assets/images/alphabetImages/stroke/queen.png": "ca0ded7809737157bc8f251f1db1b98c",
"assets/assets/images/alphabetImages/stroke/yak.png": "d3fc9c293cdafce1cfb87a36d52bfe05",
"assets/assets/images/alphabetImages/stroke/unicorn.png": "dac045aafe1bb027b6962ce20f652192",
"assets/assets/images/alphabetImages/stroke/turtle.png": "e4d4d2510f995834422c9297f925d912",
"assets/assets/images/alphabetImages/stroke/ball.png": "a152692db9bcd4d2b738aeb764238102",
"assets/assets/images/alphabetImages/stroke/elephant.png": "9089a27c54291a0f7eaa9e1df8c3c38e",
"assets/assets/images/alphabetImages/stroke/lion.png": "009d653a1cf7e31140c7cc0be8bfc7d0",
"assets/assets/images/alphabetImages/stroke/helicopter.png": "71a37729962e517a98b5e2cf5b19d934",
"assets/assets/images/alphabetImages/stroke/zebra.png": "092a43a8e01985b8f663e987a1418385",
"assets/assets/images/alphabetImages/stroke/ink.png": "75dc8014124597885704b7a52c6dda4d",
"assets/assets/images/alphabetImages/stroke/ant.png": "8a8becb0c0f97f225b8e33f09d3e5e8f",
"assets/assets/images/alphabetImages/stroke/notebook.png": "aff0b794a55371fa4e538b3f22f1ea6d",
"assets/assets/images/alphabetImages/stroke/watermelon.png": "7b43f1360c9a0f63a14d3b1a494ad7e7",
"assets/assets/images/alphabetImages/stroke/orange.png": "d136a4fc69241ad96d07c9aa771ad6ab",
"assets/assets/images/alphabetImages/stroke/van.png": "b3d7994a4d9d8df469f509ac9dcd4f05",
"assets/assets/images/alphabetImages/stroke/grapes.png": "2dbab4451d91648799c8b2dddcb89ce6",
"assets/assets/images/alphabetImages/stroke/x'mas.png": "20d5d037a788f169e04e9c45d6d83891",
"assets/assets/images/alphabetImages/stroke/cat.png": "baa58523c93bfb282aa69f9d95fbc268",
"assets/assets/images/alphabetImages/stroke/monkey.png": "c2afefed182342ef01ff2c8c9aa87d1b",
"assets/assets/images/alphabetImages/stroke/jelly.png": "a5b22cd268578b3e13eaffe6c7375189",
"assets/assets/images/alphabetImages/stroke/sun.png": "ac6e763e7ab949624ebddcf74b7ba35d",
"assets/assets/images/alphabetImages/zebra.png": "153bab6a5c78c414c879bf98b7a63853",
"assets/assets/images/alphabetImages/ink.png": "6d979e7aaf018ab90b53ae398d36b300",
"assets/assets/images/alphabetImages/oranges.png": "1d2c8a35d362b2af3f3308b7984ad87c",
"assets/assets/images/alphabetImages/notebook.png": "12cce57eb4ae0051c36ea787e1eae447",
"assets/assets/images/alphabetImages/watermelon.png": "2dcb6d87906a9276b71d890cc8737be8",
"assets/assets/images/alphabetImages/van.png": "17e7fe4f669b9bdfd8e034a85da19ebe",
"assets/assets/images/alphabetImages/grapes.png": "244963883f5c983a973e3e18afbca0a3",
"assets/assets/images/alphabetImages/x'mas.png": "b95e50677fc9a88d4683b8fd43598c9e",
"assets/assets/images/alphabetImages/apple.png": "887b9e5124b3bdff975612542dc3e204",
"assets/assets/images/alphabetImages/cat.png": "6765cc33b9e3f468d9ce513fc765a19a",
"assets/assets/images/alphabetImages/monkey.png": "d6af8fc612a55ad5ac851ce26ebd8744",
"assets/assets/images/alphabetImages/jelly.png": "a5b22cd268578b3e13eaffe6c7375189",
"assets/assets/images/alphabetImages/sun.png": "d432e9a73c34620bb789590cec6818f7",
"assets/assets/images/alphabetImages/fish.png": "971bba7c632a6a9d8ff20cf5ec82b7ef",
"assets/assets/images/fish.png": "503e7b31d764a590bd0426ab515f01ab",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
