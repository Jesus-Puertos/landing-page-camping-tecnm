const atcbVersion = "1.13.2",
  isBrowser = new Function(
    "try { return this===window; } catch(e) { return false; }"
  ),
  isiOS = isBrowser()
    ? new Function(
        'if ((/iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) { return true; } else { return false; }'
      )
    : new Function("return false;"),
  isAndroid = isBrowser()
    ? new Function(
        "if (/android/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) { return true; } else { return false; }"
      )
    : new Function("return false;"),
  isWebView = isBrowser()
    ? new Function(
        "if (/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent || navigator.vendor)) { return true; } else { return false; }"
      )
    : new Function("return false;"),
  isProblematicWebView = isBrowser()
    ? new Function(
        "if (/(Instagram)/i.test(navigator.userAgent || navigator.vendor || window.opera)) { return true; } else { return false; }"
      )
    : new Function("return false;");
let atcbDefaultTarget = "_blank";
isWebView() && (atcbDefaultTarget = "_system");
const atcbIcon = {
  trigger:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 122.88'><path d='M81.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73V4.73h0zm-3.65 76.03c1.83 0 3.32 1.49 3.32 3.32s-1.49 3.32-3.32 3.32l-12.95-.04-.04 12.93c0 1.83-1.49 3.32-3.32 3.32s-3.32-1.49-3.32-3.32l.04-12.94-12.93-.05c-1.83 0-3.32-1.49-3.32-3.32s1.49-3.32 3.32-3.32l12.94.04.04-12.93c0-1.83 1.49-3.32 3.32-3.32s3.32 1.49 3.32 3.32l-.04 12.95 12.94.04h0zM29.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73V4.73h0zM6.4 45.32h110.08V21.47c0-.8-.33-1.53-.86-2.07-.53-.53-1.26-.86-2.07-.86H103c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h10.55c2.57 0 4.9 1.05 6.59 2.74s2.74 4.02 2.74 6.59v27.06 65.03c0 2.57-1.05 4.9-2.74 6.59s-4.02 2.74-6.59 2.74H9.33c-2.57 0-4.9-1.05-6.59-2.74-1.69-1.7-2.74-4.03-2.74-6.6V48.53 21.47c0-2.57 1.05-4.9 2.74-6.59s4.02-2.74 6.59-2.74H20.6c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H9.33c-.8 0-1.53.33-2.07.86-.53.53-.86 1.26-.86 2.07v23.85h0zm110.08 6.41H6.4v61.82c0 .8.33 1.53.86 2.07.53.53 1.26.86 2.07.86h104.22c.8 0 1.53-.33 2.07-.86.53-.53.86-1.26.86-2.07V51.73h0zM50.43 18.54c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h21.49c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H50.43h0z'/></svg>",
  apple:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640' shape-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd'><path d='M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z'/></svg>",
  google:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 122.88'><path d='M93.78 29.1H29.1v64.68h64.68V29.1z' fill='#fff'/><path d='M93.78 122.88l29.1-29.1h-29.1v29.1z' fill='#f72a25'/><path d='M122.88 29.1h-29.1v64.68h29.1V29.1z' fill='#fbbc04'/><path d='M93.78 93.78H29.1v29.1h64.68v-29.1z' fill='#34a853'/><path d='M0 93.78v19.4c0 5.36 4.34 9.7 9.7 9.7h19.4v-29.1H0h0z' fill='#188038'/><path d='M122.88 29.1V9.7c0-5.36-4.34-9.7-9.7-9.7h-19.4v29.1h29.1 0z' fill='#1967d2'/><path d='M93.78 0H9.7C4.34 0 0 4.34 0 9.7v84.08h29.1V29.1h64.67V0h.01z' fill='#4285f4'/><path d='M42.37 79.27c-2.42-1.63-4.09-4.02-5-7.17l5.61-2.31c.51 1.94 1.4 3.44 2.67 4.51 1.26 1.07 2.8 1.59 4.59 1.59 1.84 0 3.41-.56 4.73-1.67 1.32-1.12 1.98-2.54 1.98-4.26 0-1.76-.7-3.2-2.09-4.32s-3.14-1.67-5.22-1.67H46.4v-5.55h2.91c1.79 0 3.31-.48 4.54-1.46 1.23-.97 1.84-2.3 1.84-3.99 0-1.5-.55-2.7-1.65-3.6s-2.49-1.35-4.18-1.35c-1.65 0-2.96.44-3.93 1.32s-1.7 2-2.12 3.24l-5.55-2.31c.74-2.09 2.09-3.93 4.07-5.52s4.51-2.39 7.58-2.39c2.27 0 4.32.44 6.13 1.32s3.23 2.1 4.26 3.65c1.03 1.56 1.54 3.31 1.54 5.25 0 1.98-.48 3.65-1.43 5.03-.95 1.37-2.13 2.43-3.52 3.16v.33c1.79.74 3.36 1.96 4.51 3.52 1.17 1.58 1.76 3.46 1.76 5.66s-.56 4.16-1.67 5.88c-1.12 1.72-2.66 3.08-4.62 4.07s-4.17 1.49-6.62 1.49c-2.84 0-5.46-.81-7.88-2.45h0 0zm34.46-27.84l-6.16 4.45-3.08-4.67 11.05-7.97h4.24v37.6h-6.05V51.43h0z' fill='#1a73e8'/></svg>",
  ical: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 122.88'><path d='M81.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73V4.73h0zm-15.5 99.08c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H66.11h0zM15.85 67.09c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H15.85h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H40.98h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H66.11h0zm25.14 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H91.25h0zm-75.4 18.36c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H15.85h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H40.98h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H66.11h0zm25.14 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H91.25h0zm-75.4 18.36c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H15.85h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H40.98h0zM29.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73V4.73h0zM6.4 45.32h110.07V21.47c0-.8-.33-1.53-.86-2.07-.53-.53-1.26-.86-2.07-.86H103c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h10.55c2.57 0 4.9 1.05 6.59 2.74s2.74 4.02 2.74 6.59v27.06 65.03c0 2.57-1.05 4.9-2.74 6.59s-4.02 2.74-6.59 2.74H9.33c-2.57 0-4.9-1.05-6.59-2.74-1.69-1.7-2.74-4.03-2.74-6.6V48.52 21.47c0-2.57 1.05-4.9 2.74-6.59s4.02-2.74 6.59-2.74H20.6c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H9.33c-.8 0-1.53.33-2.07.86-.53.53-.86 1.26-.86 2.07v23.85h0zm110.08 6.41H6.4v61.82c0 .8.33 1.53.86 2.07.53.53 1.26.86 2.07.86h104.22c.8 0 1.53-.33 2.07-.86.53-.53.86-1.26.86-2.07V51.73h0zM50.43 18.54c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h21.49c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H50.43h0z'/></svg>",
  msteams:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2228.833 2073.333'><g fill='#5059c9'><path d='M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h0-1.711c-199.901.028-361.975-162-362.004-361.901v-.052-571.409c.001-28.427 23.045-51.471 51.471-51.471h0z'/><circle cx='1943.75' cy='440.583' r='233.25'/></g><g fill='#7b83eb'><circle cx='1218.083' cy='336.917' r='336.917'/><path d='M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-95.01 99.676v598.105c-7.505 322.519 247.657 590.16 570.167 598.053 322.51-7.893 577.671-275.534 570.167-598.053V877.176c1.245-53.745-41.268-98.346-95.011-99.676z'/></g><path opacity='.1' d='M1244 777.5v838.145c-.258 38.435-23.549 72.964-59.09 87.598-11.316 4.787-23.478 7.254-35.765 7.257H667.613c-6.738-17.105-12.958-34.21-18.142-51.833-18.144-59.477-27.402-121.307-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52H1244z'/><path opacity='.2' d='M1192.167 777.5v889.978a91.84 91.84 0 0 1-7.257 35.765c-14.634 35.541-49.163 58.833-87.598 59.09H691.975c-8.812-17.105-17.105-34.21-24.362-51.833s-12.958-34.21-18.142-51.833a631.28 631.28 0 0 1-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h475.313z'/><path opacity='.2' d='M1192.167 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855h-447.84A631.28 631.28 0 0 1 622 1475.177V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h475.312z'/><path opacity='.2' d='M1140.333 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855H649.472A631.28 631.28 0 0 1 622 1475.177V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h423.478z'/><path opacity='.1' d='M1244 509.522v163.275c-8.812.518-17.105 1.037-25.917 1.037s-17.105-.518-25.917-1.037c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003 288.02 288.02 0 0 1-16.587-51.833h258.648c52.305.198 94.657 42.549 94.856 94.854z'/><use xlink:href='#C' opacity='.2'/><use xlink:href='#C' opacity='.2'/><path opacity='.2' d='M1140.333 561.355v103.148A336.92 336.92 0 0 1 907.083 466.5h138.395c52.305.199 94.656 42.551 94.855 94.855z'/><linearGradient id='A' gradientUnits='userSpaceOnUse' x1='198.099' y1='392.261' x2='942.234' y2='1681.073'><stop offset='0' stop-color='#5a62c3'/><stop offset='.5' stop-color='#4d55bd'/><stop offset='1' stop-color='#3940ab'/></linearGradient><path fill='url(#A)' d='M95.01 466.5h950.312c52.473 0 95.01 42.538 95.01 95.01v950.312c0 52.473-42.538 95.01-95.01 95.01H95.01c-52.473 0-95.01-42.538-95.01-95.01V561.51c0-52.472 42.538-95.01 95.01-95.01z'/><path fill='#fff' d='M820.211,828.193H630.241v517.297H509.211V828.193H320.123V727.844h500.088V828.193z'/><defs ><path id='C' d='M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z'/></defs></svg>",
  ms365:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 278050 333334' shape-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd'><path fill='#ea3e23' d='M278050 305556l-29-16V28627L178807 0 448 66971l-448 87 22 200227 60865-23821V80555l117920-28193-17 239519L122 267285l178668 65976v73l99231-27462v-316z'/></svg>",
  outlookcom:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-0.129793726981 0 33.251996719421 32' width='2500' height='2397'><path d='M28.596 2H11.404A1.404 1.404 0 0 0 10 3.404V5l9.69 3L30 5V3.404A1.404 1.404 0 0 0 28.596 2z' fill='#0364b8'/><path d='M31.65 17.405A11.341 11.341 0 0 0 32 16a.666.666 0 0 0-.333-.576l-.013-.008-.004-.002L20.812 9.24a1.499 1.499 0 0 0-1.479-.083 1.49 1.49 0 0 0-.145.082L8.35 15.415l-.004.002-.012.007A.666.666 0 0 0 8 16a11.344 11.344 0 0 0 .35 1.405l11.492 8.405z' fill='#0a2767'/><path d='M24 5h-7l-2.021 3L17 11l7 6h6v-6z' fill='#28a8ea'/><path d='M10 5h7v6h-7z' fill='#0078d4'/><path d='M24 5h6v6h-6z' fill='#50d9ff'/><path d='M24 17l-7-6h-7v6l7 6 10.832 1.768z' fill='#0364b8'/><path d='M17 11h7v6h-7z' fill='#0078d4'/><path d='M10 17h7v6h-7z' fill='#064a8c'/><path d='M24 17h6v6h-6z' fill='#0078d4'/><path d='M20.19 25.218l-11.793-8.6.495-.87 10.909 6.212a.528.528 0 0 0 .42-.012l10.933-6.23.496.869z' fill='#0a2767' opacity='.5'/><path d='M31.667 16.577l-.014.008-.003.002-10.838 6.174a1.497 1.497 0 0 1-1.46.091l3.774 5.061 8.254 1.797v.004A1.498 1.498 0 0 0 32 28.5V16a.666.666 0 0 1-.333.577z' fill='#1490df'/><path d='M32 28.5v-.738l-9.983-5.688-1.205.687a1.497 1.497 0 0 1-1.46.091l3.774 5.061 8.254 1.797v.004A1.498 1.498 0 0 0 32 28.5z' opacity='.05'/><path d='M31.95 28.883L21.007 22.65l-.195.11a1.497 1.497 0 0 1-1.46.092l3.774 5.061 8.254 1.797v.004a1.501 1.501 0 0 0 .57-.83z' opacity='.1'/><path d='M8.35 16.59v-.01h-.01l-.03-.02A.65.65 0 0 1 8 16v12.5A1.498 1.498 0 0 0 9.5 30h21a1.503 1.503 0 0 0 .37-.05.637.637 0 0 0 .18-.06.142.142 0 0 0 .06-.02 1.048 1.048 0 0 0 .23-.13c.02-.01.03-.01.04-.03z' fill='#28a8ea'/><path d='M18 24.667V8.333A1.337 1.337 0 0 0 16.667 7H10.03v7.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v10h8.667A1.337 1.337 0 0 0 18 24.667z' opacity='.1'/><path d='M17 25.667V9.333A1.337 1.337 0 0 0 15.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v11h7.667A1.337 1.337 0 0 0 17 25.667z' opacity='.2'/><path d='M17 23.667V9.333A1.337 1.337 0 0 0 15.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v9h7.667A1.337 1.337 0 0 0 17 23.667z' opacity='.2'/><path d='M16 23.667V9.333A1.337 1.337 0 0 0 14.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v9h6.667A1.337 1.337 0 0 0 16 23.667z' opacity='.2'/><path d='M1.333 8h13.334A1.333 1.333 0 0 1 16 9.333v13.334A1.333 1.333 0 0 1 14.667 24H1.333A1.333 1.333 0 0 1 0 22.667V9.333A1.333 1.333 0 0 1 1.333 8z' fill='#0078d4'/><path d='M3.867 13.468a4.181 4.181 0 0 1 1.642-1.814A4.965 4.965 0 0 1 8.119 11a4.617 4.617 0 0 1 2.413.62 4.14 4.14 0 0 1 1.598 1.733 5.597 5.597 0 0 1 .56 2.55 5.901 5.901 0 0 1-.577 2.666 4.239 4.239 0 0 1-1.645 1.794A4.8 4.8 0 0 1 7.963 21a4.729 4.729 0 0 1-2.468-.627 4.204 4.204 0 0 1-1.618-1.736 5.459 5.459 0 0 1-.567-2.519 6.055 6.055 0 0 1 .557-2.65zm1.75 4.258a2.716 2.716 0 0 0 .923 1.194 2.411 2.411 0 0 0 1.443.435 2.533 2.533 0 0 0 1.541-.449 2.603 2.603 0 0 0 .897-1.197 4.626 4.626 0 0 0 .286-1.665 5.063 5.063 0 0 0-.27-1.686 2.669 2.669 0 0 0-.866-1.24 2.387 2.387 0 0 0-1.527-.473 2.493 2.493 0 0 0-1.477.439 2.741 2.741 0 0 0-.944 1.203 4.776 4.776 0 0 0-.007 3.44z' fill='#fff'/></svg>",
  yahoo:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3386.34 3010.5' shape-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd'><path d='M0 732.88h645.84l376.07 962.1 380.96-962.1h628.76l-946.8 2277.62H451.98l259.19-603.53L.02 732.88zm2763.84 768.75h-704.26L2684.65 0l701.69.03-622.5 1501.6zm-519.78 143.72c216.09 0 391.25 175.17 391.25 391.22 0 216.06-175.16 391.23-391.25 391.23-216.06 0-391.19-175.17-391.19-391.23 0-216.05 175.16-391.22 391.19-391.22z' fill='#5f01d1' fill-rule='nonzero'/></svg>",
  close:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.878 122.88'><path d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/></svg>",
  browser:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 113.6'><path d='M71.89 100.56q-3.86 3.82-8.37 7.63l3.74-.62a49.38 49.38 0 0 0 7.08-2l.43.64 1 1.27h0 0a16.4 16.4 0 0 0 2.13 2 55.29 55.29 0 0 1-9.73 2.92 58.73 58.73 0 0 1-22.83 0 53.48 53.48 0 0 1-10.6-3.27.26.26 0 0 1-.14-.07 62.1 62.1 0 0 1-9.6-5.17A54.41 54.41 0 0 1 16.6 97a52.69 52.69 0 0 1-6.89-8.38A59.79 59.79 0 0 1 4.46 79a55.79 55.79 0 0 1-3.34-10.78 58.73 58.73 0 0 1 0-22.83 52.86 52.86 0 0 1 3.28-10.6.33.33 0 0 1 .06-.14A60.34 60.34 0 0 1 9.71 25a54 54 0 0 1 6.89-8.39 52.19 52.19 0 0 1 8.4-6.9 59.7 59.7 0 0 1 9.67-5.25 54.52 54.52 0 0 1 10.72-3.34 58.73 58.73 0 0 1 22.83 0 53.89 53.89 0 0 1 10.6 3.27.28.28 0 0 1 .13.07 61.75 61.75 0 0 1 9.68 5.25A54.41 54.41 0 0 1 97 16.59a52.27 52.27 0 0 1 6.89 8.41 58.19 58.19 0 0 1 5.25 9.67 54.52 54.52 0 0 1 3.34 10.74l.12.6-5.42-1.53a47 47 0 0 0-2.6-7.83 54.22 54.22 0 0 0-2.87-5.76H85.08a65.47 65.47 0 0 1 4.2 8.49l-6.16-1.66a65.73 65.73 0 0 0-3.86-6.83h-20v3.41l-.61.22a13.48 13.48 0 0 0-4.36 2.68v-6.33h-20q-7.67 11.91-8.62 23.44h25.57q1 2.47 2.09 5H25.62c.31 7.87 3 15.67 7.88 23.44h20.82V61.56l5 11v10.17h4.76l2.29 5h-7.08v17.51a123.84 123.84 0 0 0 10.53-9.65q1.05 2.49 2.07 5zM114.75 98a4.64 4.64 0 0 1-1.17.79h-.08a4.14 4.14 0 0 1-4.36-.6l-11.6-9.84-4 9.77a12.93 12.93 0 0 1-1.19 2.25 9.1 9.1 0 0 1-1.51 1.76 4.78 4.78 0 0 1-7.5-.82 9.28 9.28 0 0 1-.92-1.63c-6.9-17.49-16.26-34.9-23.26-52.4A3.11 3.11 0 0 1 62.65 43c16.77 3.1 38.5 10.19 55.55 14.71 5.3 1.4 6.16 6.07 2.25 9.69a12.21 12.21 0 0 1-2 1.52c-3 1.7-6 3.67-9 5.47l11.55 9.9a4.25 4.25 0 0 1 1 1.26v.08a4.28 4.28 0 0 1 .39 1.47h0a4.26 4.26 0 0 1-.16 1.54 4.39 4.39 0 0 1-.72 1.39 94.55 94.55 0 0 1-6.76 7.97zm-3-3.84l5.59-6.56c-2.46-2.11-13-10.29-14.09-12.26a2.41 2.41 0 0 1 .83-3.25c3.66-2 8.36-4.86 11.83-7.17a8.38 8.38 0 0 0 1.22-.89 4.42 4.42 0 0 0 .75-.87l.16-.3-.31-.18a3.92 3.92 0 0 0-.76-.26L65 48.6l21.83 49.14a4.8 4.8 0 0 0 .38.7l.22.29.28-.2a4.51 4.51 0 0 0 .73-.89 7.51 7.51 0 0 0 .68-1.33c1.63-4 3.49-9.47 5.4-13.17l.23-.32a2.4 2.4 0 0 1 3.37-.27l13.64 11.57zm-61.62 14.03a105.56 105.56 0 0 1-19.26-20.48H15.16a51.5 51.5 0 0 0 12.61 12 52.81 52.81 0 0 0 8.89 4.8s.07 0 .11.07a49.13 49.13 0 0 0 9.64 3 65.13 65.13 0 0 0 3.75.62zM11.89 82.73H27.7a50.6 50.6 0 0 1-7-23.44H5a55.75 55.75 0 0 0 1 7.94A48.27 48.27 0 0 0 9 77a54.16 54.16 0 0 0 2.86 5.76zM5 54.31h15.75a54.38 54.38 0 0 1 7.77-23.44H11.89A54.16 54.16 0 0 0 9 36.63s0 .07-.07.1a49.91 49.91 0 0 0-3 9.65 51.46 51.46 0 0 0-1 7.93zM15.13 25.9h16.59A117.72 117.72 0 0 1 50.46 5.35c-1.39.17-2.76.37-4.08.65a48.36 48.36 0 0 0-9.75 3 55.24 55.24 0 0 0-8.89 4.8 51.5 51.5 0 0 0-12.61 12h0zm48-20.55A114.63 114.63 0 0 1 81.88 25.9h16.6a48.63 48.63 0 0 0-5-5.76 49.81 49.81 0 0 0-7.63-6.27A53.27 53.27 0 0 0 77 9.06s-.06 0-.1-.06a49.15 49.15 0 0 0-9.64-3c-1.36-.27-2.73-.48-4.09-.65h0zm-3.84 3.24V25.9h16.49A115.68 115.68 0 0 0 59.29 8.59zm-5 96.63V87.71H37a105.67 105.67 0 0 0 17.35 17.51zm0-79.32V8.59A116.3 116.3 0 0 0 37.82 25.9z'/></svg>",
};
function atcb_init() {
  console.log(
    "add-to-calendar button initialized (version " + atcbVersion + ")"
  ),
    console.log(
      "See https://github.com/add2cal/add-to-calendar-button for details"
    );
  const a = document.querySelectorAll(".atcb");
  if (0 < a.length) {
    var n = document.querySelectorAll(".atcb-initialized");
    for (let t = 0; t < a.length; t++)
      if (!a[parseInt(t)].classList.contains("atcb-initialized")) {
        let e = JSON.parse(
          atcb_seure_content(
            a[parseInt(t)].innerHTML.replace(/(\r\n|\n|\r)/g, ""),
            !1
          )
        );
        (e = atcb_patch_config(e)),
          atcb_check_required(e) &&
            ((e = atcb_decorate_data(e)),
            atcb_validate(e) &&
              ((null != e.identifier && "" != e.identifier) ||
                (e.identifier = "atcb-btn-" + (t + n.length + 1)),
              atcb_generate(a[parseInt(t)], e)));
      }
  }
}
function atcb_patch_config(t) {
  null != t.event &&
    (Object.keys(t.event).forEach((e) => {
      "@" !== e.charAt(0) && (t["" + e] = t.event["" + e]);
    }),
    delete t.event);
  const a = {
    title: "name",
    dateStart: "startDate",
    dateEnd: "endDate",
    timeStart: "startTime",
    timeEnd: "endTime",
  };
  return (
    Object.keys(a).forEach((e) => {
      null == t[a["" + e]] && null != t["" + e] && (t[a["" + e]] = t["" + e]);
    }),
    t
  );
}
function atcb_decorate_data(a) {
  for (let t = 0; t < a.options.length; t++) {
    let e = a.options["" + t].split("|");
    a.options["" + t] = e[0]
      .toLowerCase()
      .replace("microsoft", "ms")
      .replace(".", "");
  }
  if (
    (((a = atcb_date_cleanup(a)).startDate = atcb_date_calculation(
      a.startDate
    )),
    (a.endDate = atcb_date_calculation(a.endDate)),
    "modal" === a.listStyle && (a.trigger = "click"),
    null == a.lightMode || "" == a.lightMode)
  )
    a.lightMode = "light";
  else if (null != a.lightMode && "" != a.lightMode) {
    var e = window.matchMedia("(prefers-color-scheme: dark)");
    switch (a.lightMode) {
      case "system":
        e.matches ? (a.lightMode = "dark") : (a.lightMode = "light");
        break;
      case "bodyScheme":
      case "dark":
        break;
      default:
        a.lightMode = "light";
    }
  }
  if (
    ((null != a.language && "" != a.language) || (a.language = "en"),
    null != a.recurrence &&
      "" != a.recurrence &&
      (a.recurrence = a.recurrence.replace(/\s+/g, "")),
    !a.description || a.descriptionHtmlFree)
  )
    return a;
  const t = Object.assign({}, a);
  return (
    (t.descriptionHtmlFree = atcb_rewrite_html_elements(t.description, !0)),
    (t.description = atcb_rewrite_html_elements(t.description)),
    t
  );
}
function atcb_check_required(t) {
  if (null == t.options || t.options.length < 1)
    return (
      console.error("add-to-calendar button generation failed: no options set"),
      !1
    );
  return ["name", "startDate"].every(function (e) {
    return (
      (null != t["" + e] && "" != t["" + e]) ||
      (console.error(
        "add-to-calendar button generation failed: required setting missing [" +
          e +
          "]"
      ),
      !1)
    );
  });
}
function atcb_date_cleanup(n) {
  (null != n.endDate && "" != n.endDate) ||
    null == n.startDate ||
    (n.endDate = n.startDate);
  return (
    ["start", "end"].forEach(function (e) {
      var t;
      if (
        (null != n[e + "Date"] &&
          ((n[e + "Date"] = n[e + "Date"]
            .replace(/\.\d{3}/, "")
            .replace("Z", "")),
          null != (t = n[e + "Date"].split("T"))[1] &&
            ((n[e + "Date"] = t[0]), (n[e + "Time"] = t[1]))),
        null != n[e + "Time"] && 8 === n[e + "Time"].length)
      ) {
        const a = n[e + "Time"];
        n[e + "Time"] = a.substring(0, a.length - 3);
      }
    }),
    n
  );
}
function atcb_date_calculation(e) {
  const t = new Date();
  var a = t.getUTCMonth() + 1 + "-" + t.getUTCDate() + "-" + t.getUTCFullYear();
  const n = (e = e.replace(/today/gi, a)).split("+");
  a = n[0].split("-");
  let c = new Date(a[0], a[1] - 1, a[2]);
  return (
    a[0].length < 4 && (c = new Date(a[2], a[0] - 1, a[1])),
    null != n[1] && 0 < n[1] && c.setDate(c.getDate() + parseInt(n[1])),
    c.getFullYear() +
      "-" +
      (c.getMonth() + 1 < 10 ? "0" : "") +
      (c.getMonth() + 1) +
      "-" +
      (c.getDate() < 10 ? "0" : "") +
      c.getDate()
  );
}
function atcb_validate(a) {
  if (
    (null != a.identifier &&
      "" != a.identifier &&
      (/^[\w-]+$/.test(a.identifier) ||
        ((a.identifier = ""),
        console.error(
          "add-to-calendar button generation: identifier invalid - using auto numbers instead"
        ))),
    !(
      null == a.icsFile ||
      "" == a.icsFile ||
      (atcb_secure_url(a.icsFile, !1) && /\.ics$/.test(a.icsFile))
    ))
  )
    return (
      console.error(
        "add-to-calendar button generation failed: explicit ics file path not valid"
      ),
      !1
    );
  const t = [
      "apple",
      "google",
      "ical",
      "ms365",
      "outlookcom",
      "msteams",
      "yahoo",
    ],
    n = ["apple", "google", "ical"];
  if (
    !a.options.every(function (e) {
      e = e.split("|");
      return (
        !!t.includes(e[0]) ||
        (console.error(
          "add-to-calendar button generation failed: invalid option [" +
            e[0] +
            "]"
        ),
        !1)
      );
    })
  )
    return !1;
  if ((null != a.recurrence) & ("" != a.recurrence)) {
    let t = !1;
    if (
      (a.options.forEach(function (e) {
        e = e.split("|");
        n.includes(e[0]) && (t = !0);
      }),
      !t)
    )
      return (
        console.error(
          "add-to-calendar button generation failed: no supported valid option for recurring events"
        ),
        !1
      );
  }
  const e = ["startDate", "endDate"],
    c = e;
  if (
    !e.every(function (e) {
      if (10 !== a["" + e].length)
        return (
          console.error(
            "add-to-calendar button generation failed: date misspelled [-> YYYY-MM-DD]"
          ),
          !1
        );
      var t = a["" + e].split("-");
      return t.length < 3 || 3 < t.length
        ? (console.error(
            "add-to-calendar button generation failed: date misspelled [" +
              e +
              ": " +
              a["" + e] +
              "]"
          ),
          !1)
        : ((c["" + e] = new Date(t[0], t[1] - 1, t[2])), !0);
    })
  )
    return !1;
  return (
    !!["startTime", "endTime"].every(function (e) {
      if (null != a["" + e]) {
        if (5 !== a["" + e].length)
          return (
            console.error(
              "add-to-calendar button generation failed: time misspelled [-> HH:MM]"
            ),
            !1
          );
        var t = a["" + e].split(":");
        if (t.length < 2 || 2 < t.length)
          return (
            console.error(
              "add-to-calendar button generation failed: time misspelled [" +
                e +
                ": " +
                a["" + e] +
                "]"
            ),
            !1
          );
        if (23 < t[0])
          return (
            console.error(
              "add-to-calendar button generation failed: time misspelled - hours number too high [" +
                e +
                ": " +
                t[0] +
                "]"
            ),
            !1
          );
        if (59 < t[1])
          return (
            console.error(
              "add-to-calendar button generation failed: time misspelled - minutes number too high [" +
                e +
                ": " +
                t[1] +
                "]"
            ),
            !1
          );
        "startTime" == e &&
          (c.startDate = new Date(
            c.startDate.getTime() + 36e5 * t[0] + 6e4 * t[1]
          )),
          "endTime" == e &&
            (c.endDate = new Date(
              c.endDate.getTime() + 36e5 * t[0] + 6e4 * t[1]
            ));
      }
      return !0;
    }) &&
    ((null != a.startTime && null == a.endTime) ||
    (null == a.startTime && null != a.endTime)
      ? (console.error(
          "add-to-calendar button generation failed: if you set a starting time, you also need to define an end time"
        ),
        !1)
      : c.endDate < c.startDate
      ? (console.error(
          "add-to-calendar button generation failed: end date before start date"
        ),
        !1)
      : !(
          null != a.recurrence &&
          "" != a.recurrence &&
          !/^[\w=;:*+-/\\]+$/.test(a.recurrence)
        ) ||
        (console.error(
          "add-to-calendar button generation failed: RRULE data misspelled"
        ),
        !1))
  );
}
function atcb_generate_label(t, a, e, n = !1, c = "", l = !1) {
  if (
    null == t.recurrence ||
    "" == t.recurrence ||
    ("msteams" != e && "ms365" != e && "outlookcom" != e && "yahoo" != e)
  ) {
    var i = atcb_translate_hook("Add to Calendar", t.language, t);
    switch ((l && "" == c && (c = i), e)) {
      case "trigger":
      default:
        "click" === t.trigger
          ? a.addEventListener(
              "click",
              atcb_debounce_leading(() => atcb_toggle(t, a, !1, !0))
            )
          : (a.addEventListener(
              "touchstart",
              atcb_debounce_leading(() => atcb_toggle(t, a, !1, !0)),
              { passive: !0 }
            ),
            a.addEventListener(
              "mouseenter",
              atcb_debounce_leading(() => atcb_open(t, a, !1, !0))
            )),
          a.setAttribute("id", t.identifier),
          (c = c || i);
        break;
      case "apple":
        a.addEventListener(
          "click",
          atcb_debounce(() => {
            l ? a.blur() : atcb_close(), atcb_generate_ical(t);
          })
        ),
          a.setAttribute("id", t.identifier + "-apple"),
          (c = c || "Apple");
        break;
      case "google":
        a.addEventListener(
          "click",
          atcb_debounce(() => {
            l ? a.blur() : atcb_close(), atcb_generate_google(t);
          })
        ),
          a.setAttribute("id", t.identifier + "-google"),
          (c = c || "Google");
        break;
      case "ical":
        a.addEventListener(
          "click",
          atcb_debounce(() => {
            l ? a.blur() : atcb_close(), atcb_generate_ical(t);
          })
        ),
          a.setAttribute("id", t.identifier + "-ical"),
          (c = c || atcb_translate_hook("iCal File", t.language, t));
        break;
      case "msteams":
        a.addEventListener(
          "click",
          atcb_debounce(() => {
            l ? a.blur() : atcb_close(), atcb_generate_teams(t);
          })
        ),
          a.setAttribute("id", t.identifier + "-msteams"),
          (c = c || "Microsoft Teams");
        break;
      case "ms365":
        a.addEventListener(
          "click",
          atcb_debounce(() => {
            l ? a.blur() : atcb_close(), atcb_generate_microsoft(t, "365");
          })
        ),
          a.setAttribute("id", t.identifier + "-ms365"),
          (c = c || "Microsoft 365");
        break;
      case "outlookcom":
        a.addEventListener(
          "click",
          atcb_debounce(() => {
            l ? a.blur() : atcb_close(), atcb_generate_microsoft(t, "outlook");
          })
        ),
          a.setAttribute("id", t.identifier + "-outlook"),
          (c = c || "Outlook.com");
        break;
      case "yahoo":
        a.addEventListener(
          "click",
          atcb_debounce(() => {
            l ? a.blur() : atcb_close(), atcb_generate_yahoo(t);
          })
        ),
          a.setAttribute("id", t.identifier + "-yahoo"),
          (c = c || "Yahoo");
        break;
      case "close":
        a.addEventListener(
          "click",
          atcb_debounce(() => {
            l ? a.blur() : atcb_close();
          })
        ),
          a.addEventListener(
            "focus",
            atcb_debounce(() => atcb_close(!1))
          ),
          a.setAttribute("id", t.identifier + "-close"),
          (c = atcb_translate_hook("Close", t.language, t));
    }
    if (
      (l && a.setAttribute("id", t.identifier),
      l || "trigger" !== e
        ? a.addEventListener(
            "keydown",
            atcb_debounce_leading((e) => {
              "Enter" == e.key && (e.preventDefault(), a.click());
            })
          )
        : a.addEventListener(
            "keydown",
            atcb_debounce_leading((e) => {
              "Enter" == e.key &&
                (e.preventDefault(), atcb_toggle(t, a, !0, !0));
            })
          ),
      n)
    ) {
      const r = document.createElement("span");
      r.classList.add("atcb-icon"),
        (r.innerHTML = atcbIcon["" + e]),
        a.appendChild(r);
    }
    const o = document.createElement("span");
    o.classList.add("atcb-text"), (o.textContent = c), a.appendChild(o);
  } else a.remove();
}
function atcb_generate(e, t) {
  if (((e.textContent = ""), t.name && t.location && t.startDate)) {
    const l = document.createElement("script");
    l.setAttribute("type", "application/ld+json"),
      (l.textContent =
        '{ "event": { "@context":"https://schema.org", "@type":"Event", '),
      (l.textContent += '"name":"' + t.name + '", '),
      t.descriptionHtmlFree &&
        (l.textContent += '"description":"' + t.descriptionHtmlFree + '", ');
    var a = atcb_generate_time(t, "delimiters", "general", !0);
    (l.textContent += '"startDate":"' + a.start + '", '),
      (l.textContent += '"endDate":"' + a.end + '", '),
      t.location.startsWith("http")
        ? ((l.textContent +=
            '"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode", '),
          (l.textContent +=
            '"location": { "@type":"VirtualLocation", "url":"' +
            t.location +
            '" } '))
        : (l.textContent += '"location":"' + t.location + '" '),
      (l.textContent += "} }"),
      e.appendChild(l);
  }
  const n = document.createElement("div"),
    c =
      (n.classList.add("atcb-button-wrapper"),
      n.classList.add("atcb-" + t.lightMode),
      e.appendChild(n),
      document.createElement("button"));
  if (
    (c.classList.add("atcb-button"),
    c.setAttribute("type", "button"),
    n.appendChild(c),
    1 === t.options.length)
  ) {
    a = t.options[0].split("|");
    atcb_generate_label(t, c, a[0], !0, t.label, !0);
  } else {
    atcb_generate_label(t, c, "trigger", !0, t.label);
    const i = document.createElement("div");
    i.classList.add("atcb-dropdown-anchor"), n.appendChild(i);
  }
  e.classList.remove("atcb"),
    e.classList.add("atcb-initialized"),
    t.inline ? (e.style.display = "inline-block") : (e.style.display = "block"),
    console.log('add-to-calendar button "' + t.identifier + '" created');
}
function atcb_generate_dropdown_list(a) {
  const n = document.createElement("div");
  if (
    (n.classList.add("atcb-list"),
    n.classList.add("atcb-" + a.lightMode),
    a.options.forEach(function (e) {
      e = e.split("|");
      const t = document.createElement("div");
      t.classList.add("atcb-list-item"),
        (t.tabIndex = 0),
        n.appendChild(t),
        atcb_generate_label(a, t, e[0], !0, e[1]);
    }),
    "modal" === a.listStyle)
  ) {
    const e = document.createElement("div");
    e.classList.add("atcb-list-item", "atcb-list-item-close"),
      (e.tabIndex = 0),
      n.appendChild(e),
      atcb_generate_label(a, e, "close", !0);
  }
  return n;
}
function atcb_generate_bg_overlay(e = "dropdown", t = "", a = !0) {
  const n = document.createElement("div");
  n.setAttribute("id", "atcb-bgoverlay"),
    "modal" !== e && a && n.classList.add("atcb-animate-bg"),
    a || n.classList.add("atcb-no-bg"),
    (n.tabIndex = 0),
    n.addEventListener(
      "click",
      atcb_debounce((e) => {
        e.target === e.currentTarget && atcb_close(!0);
      })
    );
  let c = !1;
  return (
    n.addEventListener(
      "touchstart",
      atcb_debounce_leading(() => (c = !1)),
      { passive: !0 }
    ),
    n.addEventListener(
      "touchmove",
      atcb_debounce_leading(() => (c = !0)),
      { passive: !0 }
    ),
    n.addEventListener(
      "touchend",
      atcb_debounce((e) => {
        !1 === c && e.target === e.currentTarget && atcb_close(!0);
      }),
      { passive: !0 }
    ),
    n.addEventListener(
      "focus",
      atcb_debounce_leading((e) => {
        e.target === e.currentTarget && atcb_close();
      })
    ),
    "click" !== t
      ? n.addEventListener(
          "mousemove",
          atcb_debounce_leading((e) => {
            e.target === e.currentTarget && atcb_close(!0);
          })
        )
      : n.classList.add("atcb-click"),
    n
  );
}
function atcb_toggle(e, t, a = !1, n = !1) {
  t.classList.contains("atcb-active") ||
  document.querySelector(".atcb-active-modal")
    ? atcb_close()
    : atcb_open(e, t, a, n);
}
function atcb_open(e, t, a = !1, n = !1) {
  if (
    !document.querySelector(".atcb-list") &&
    !document.querySelector(".atcb-modal")
  ) {
    const c = atcb_generate_dropdown_list(e),
      l = document.createElement("div"),
      i =
        (l.classList.add("atcb-list-wrapper"),
        t
          ? (t.classList.add("atcb-active"),
            "modal" === e.listStyle
              ? (t.classList.add("atcb-modal-style"),
                c.classList.add("atcb-modal"))
              : (l.appendChild(c), l.classList.add("atcb-dropdown")),
            n && c.classList.add("atcb-generated-button"))
          : c.classList.add("atcb-modal"),
        atcb_generate_bg_overlay(e.listStyle, e.trigger, e.background));
    "modal" === e.listStyle
      ? (document.body.appendChild(i),
        i.appendChild(c),
        document.body.classList.add("atcb-modal-no-scroll"))
      : (document.body.appendChild(l),
        l.appendChild(c),
        atcb_position_list(t, l),
        document.body.appendChild(i)),
      atcb_set_fullsize(i),
      a ? c.firstChild.focus() : (c.firstChild.focus(), c.firstChild.blur());
  }
}
function atcb_close(e = !1) {
  if (!e) {
    let e = document.querySelector(".atcb-active, .atcb-active-modal");
    e && e.focus();
  }
  Array.from(document.querySelectorAll(".atcb-active")).forEach((e) => {
    e.classList.remove("atcb-active");
  }),
    Array.from(document.querySelectorAll(".atcb-active-modal")).forEach((e) => {
      e.classList.remove("atcb-active-modal");
    }),
    document.body.classList.remove("atcb-modal-no-scroll"),
    Array.from(document.querySelectorAll(".atcb-list-wrapper"))
      .concat(Array.from(document.querySelectorAll(".atcb-list")))
      .concat(Array.from(document.querySelectorAll(".atcb-info-modal")))
      .concat(Array.from(document.querySelectorAll("#atcb-bgoverlay")))
      .forEach((e) => e.remove());
}
function atcb_action(e, t, a = !0) {
  if (!atcb_check_required((e = atcb_seure_content(e))))
    throw new Error("data missing; see logs");
  if (!atcb_validate((e = atcb_decorate_data(e))))
    throw new Error("Invalid data; see logs");
  t
    ? (e.identifier = t.id)
    : ((e.identifier = "atcb-btn-custom"),
      (e.listStyle = "modal"),
      (e.trigger = "click")),
    atcb_open(e, t, a);
}
function atcb_generate_google(e) {
  let t = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  var a = atcb_generate_time(e, "clean", "google");
  (t += "&dates=" + a.start + "%2F" + a.end),
    null != e.name &&
      "" != e.name &&
      (t += "&text=" + encodeURIComponent(e.name));
  let n = "";
  null != e.description && "" != e.description && (n = e.description),
    null != e.location &&
      "" != e.location &&
      ((t += "&location=" + encodeURIComponent(e.location)),
      isiOS() &&
        ("" != n && (n += "<br><br>"), (n += "&#128205;: " + e.location))),
    "" != n && (t += "&details=" + encodeURIComponent(n)),
    null != e.recurrence &&
      "" != e.recurrence &&
      (t += "&recur=" + encodeURIComponent(e.recurrence)),
    atcb_secure_url(t) && window.open(t, atcbDefaultTarget).focus();
}
function atcb_generate_yahoo(e) {
  let t = "https://calendar.yahoo.com/?v=60";
  var a = atcb_generate_time(e, "clean");
  (t += "&st=" + a.start + "&et=" + a.end),
    a.allday && (t += "&dur=allday"),
    null != e.name &&
      "" != e.name &&
      (t += "&title=" + encodeURIComponent(e.name)),
    null != e.location &&
      "" != e.location &&
      (t += "&in_loc=" + encodeURIComponent(e.location)),
    null != e.descriptionHtmlFree &&
      "" != e.descriptionHtmlFree &&
      (t += "&desc=" + encodeURIComponent(e.descriptionHtmlFree)),
    atcb_secure_url(t) && window.open(t, atcbDefaultTarget).focus();
}
function atcb_generate_microsoft(e, t = "365") {
  let a = "https://";
  (a += "outlook" == t ? "outlook.live.com" : "outlook.office.com"),
    (a +=
      "/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent");
  t = atcb_generate_time(e, "delimiters", "microsoft");
  (a += "&startdt=" + t.start + "&enddt=" + t.end),
    t.allday && (a += "&allday=true"),
    null != e.name &&
      "" != e.name &&
      (a += "&subject=" + encodeURIComponent(e.name)),
    null != e.location &&
      "" != e.location &&
      (a += "&location=" + encodeURIComponent(e.location)),
    null != e.description &&
      "" != e.description &&
      (a +=
        "&body=" + encodeURIComponent(e.description.replace(/\n/g, "<br>"))),
    atcb_secure_url(a) && window.open(a, atcbDefaultTarget).focus();
}
function atcb_generate_teams(e) {
  let t = "https://teams.microsoft.com/l/meeting/new?";
  var a = atcb_generate_time(e, "delimiters", "microsoft");
  t += "&startTime=" + a.start + "&endTime=" + a.end;
  let n = "";
  null != e.name &&
    "" != e.name &&
    (t += "&subject=" + encodeURIComponent(e.name)),
    null != e.location &&
      "" != e.location &&
      ((n = encodeURIComponent(e.location)),
      (t += "&location=" + n),
      (n += " // ")),
    null != e.descriptionHtmlFree &&
      "" != e.descriptionHtmlFree &&
      (t += "&content=" + n + encodeURIComponent(e.descriptionHtmlFree)),
    atcb_secure_url(t) && window.open(t, atcbDefaultTarget).focus();
}
function atcb_generate_ical(n) {
  if (
    null == n.icsFile ||
    "" == n.icsFile ||
    !atcb_secure_url(n.icsFile) ||
    !n.icsFile.startsWith("https://") ||
    (isiOS() && isWebView())
  ) {
    let e = new Date();
    e = e.toISOString();
    var c = atcb_generate_time(n, "clean", "ical");
    let t = "";
    c.allday && (t = ";VALUE=DATE");
    const s = ["BEGIN:VCALENDAR", "VERSION:2.0"];
    s.push(
      "PRODID:-// github.com/add2cal/add-to-calendar-button // atcb v" +
        atcbVersion +
        " //EN"
    ),
      s.push("CALSCALE:GREGORIAN"),
      s.push("BEGIN:VEVENT"),
      s.push("UID:" + e + "@add-to-calendar-button"),
      s.push(
        "DTSTAMP:" + c.start,
        "DTSTART" + t + ":" + c.start,
        "DTEND" + t + ":" + c.end,
        "SUMMARY:" + n.name.replace(/.{65}/g, "$&\r\n ")
      ),
      null != n.descriptionHtmlFree &&
        "" != n.descriptionHtmlFree &&
        s.push(
          "DESCRIPTION:" +
            n.descriptionHtmlFree
              .replace(/\n/g, "\\n")
              .replace(/.{60}/g, "$&\r\n ")
        ),
      null != n.description &&
        "" != n.description &&
        s.push(
          'X-ALT-DESC;FMTTYPE=text/html:\r\n <!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 3.2//EN"">\r\n <HTML><BODY>\r\n ' +
            n.description.replace(/\n/g, "<br>").replace(/.{60}/g, "$&\r\n ") +
            "\r\n </BODY></HTML>"
        ),
      null != n.location &&
        "" != n.location &&
        s.push("LOCATION:" + n.location),
      null != n.recurrence && "" != n.recurrence && s.push(n.recurrence),
      (e = e.replace(/\.\d{3}/g, "").replace(/[^a-z\d]/gi, "")),
      s.push(
        "STATUS:CONFIRMED",
        "LAST-MODIFIED:" + e,
        "SEQUENCE:0",
        "END:VEVENT",
        "END:VCALENDAR"
      );
    let a =
      "data:text/calendar;charset=utf-8," + encodeURIComponent(s.join("\r\n"));
    c = n.iCalFileName || "event-to-save-in-my-calendar";
    if (
      (null != n.icsFile &&
        "" != n.icsFile &&
        atcb_secure_url(n.icsFile) &&
        n.icsFile.startsWith("https://") &&
        (a = n.icsFile),
      isWebView() && (isiOS() || (isAndroid() && isProblematicWebView())))
    ) {
      const d = document.createElement("input");
      document.body.appendChild(d);
      var l,
        i,
        o = d.contentEditable,
        r = d.readOnly;
      (d.value = a),
        (d.contentEditable = !0),
        (d.readOnly = !1),
        isiOS()
          ? ((l = document.createRange()).selectNodeContents(d),
            (i = window.getSelection()).removeAllRanges(),
            i.addRange(l),
            d.setSelectionRange(0, 999999))
          : (navigator.clipboard.writeText(a), d.select()),
        (d.contentEditable = o),
        (d.readOnly = r),
        document.execCommand("copy"),
        d.remove(),
        atcb_create_modal(
          n,
          "browser",
          atcb_translate_hook("WebView iCal", n.language, n),
          atcb_translate_hook("WebView info description", n.language, n)
        );
    } else
      try {
        if (window.ActiveXObject) {
          if (window.ActiveXObject && document.execCommand) {
            const u = window.open(a, atcbDefaultTarget);
            u.document.close(),
              u.document.execCommand("SaveAs", !0, c || a),
              u.close();
          }
        } else {
          const b = document.createElement("a");
          (b.href = a), (b.target = atcbDefaultTarget), (b.download = c);
          var m = new MouseEvent("click", {
            view: window,
            button: 0,
            bubbles: !0,
            cancelable: !1,
          });
          b.dispatchEvent(m),
            (window.URL || window.webkitURL).revokeObjectURL(b.href);
        }
      } catch (e) {
        console.error(e);
      }
  } else window.open(n.icsFile, atcbDefaultTarget);
}
function atcb_generate_time(i, a = "delimiters", n = "general", d = !1) {
  var c = i.startDate.split("-"),
    l = i.endDate.split("-");
  let o = "",
    r = "",
    s = !1;
  if (null != i.startTime && null != i.endTime) {
    if (null != i.timeZoneOffset && "" != i.timeZoneOffset)
      (o = new Date(
        c[0] +
          "-" +
          c[1] +
          "-" +
          c[2] +
          "T" +
          i.startTime +
          ":00.000" +
          i.timeZoneOffset
      )),
        (r = new Date(
          l[0] +
            "-" +
            l[1] +
            "-" +
            l[2] +
            "T" +
            i.endTime +
            ":00.000" +
            i.timeZoneOffset
        ));
    else if (
      ((o = new Date(
        c[0] + "-" + c[1] + "-" + c[2] + "T" + i.startTime + ":00.000+00:00"
      )),
      (r = new Date(
        l[0] + "-" + l[1] + "-" + l[2] + "T" + i.endTime + ":00.000+00:00"
      )),
      null != i.timeZone && "" != i.timeZone)
    ) {
      const t = new Date(o.toLocaleString("en-US", { timeZone: "UTC" })),
        u =
          ("currentBrowser" == i.timeZone &&
            (i.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone),
          new Date(o.toLocaleString("en-US", { timeZone: i.timeZone })));
      var e = t.getTime() - u.getTime();
      o.setTime(o.getTime() + e), r.setTime(r.getTime() + e);
    }
    if (
      ((o = o.toISOString().replace(".000", "")),
      (r = r.toISOString().replace(".000", "")),
      "clean" == a &&
        ((o = o.replace(/-/g, "").replace(/:/g, "")),
        (r = r.replace(/-/g, "").replace(/:/g, ""))),
      d)
    ) {
      let c = "",
        l = "";
      if (null != i.timeZoneOffset && "" != i.timeZoneOffset)
        (c = i.timeZoneOffset), (l = i.timeZoneOffset);
      else if (null != i.timeZone && "" != i.timeZone) {
        let e = new Date(o.toLocaleString("sv", { timeZone: i.timeZone })),
          t = e.toString().match(/GMT(.{5})/g),
          a =
            ((c = t[0].replace(/GMT(.{3})(.{2})/g, "$1:$2")),
            new Date(r.toLocaleString("sv", { timeZone: i.timeZone }))),
          n = a.toString().match(/GMT(.{5})/g);
        l = n[0].replace(/GMT(.{3})(.{2})/g, "$1:$2");
      }
      (o = o.slice(0, -1) + c), (r = r.slice(0, -1) + l);
    }
  } else {
    (s = !0), (o = new Date(Date.UTC(c[0], c[1] - 1, c[2])));
    let e = o.toISOString().replace(/T(.+)Z/g, ""),
      t =
        ((r = new Date(Date.UTC(l[0], l[1] - 1, l[2]))),
        ("google" != n && "microsoft" != n && "ical" != n) ||
          r.setDate(r.getDate() + 1),
        r.toISOString().replace(/T(.+)Z/g, ""));
    "clean" == a && ((e = e.replace(/-/g, "")), (t = t.replace(/-/g, ""))),
      (o = e),
      (r = t);
  }
  return { start: o, end: r, allday: s };
}
function atcb_seure_content(e, t = !0) {
  let a;
  return (
    (a = t ? JSON.stringify(e) : e),
    (a = a.replace(/(<(?!br)([^>]+)>)/gi, "")),
    t ? JSON.parse(a) : a
  );
}
function atcb_secure_url(e, t = !0) {
  return (
    !e.match(
      /((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi
    ) ||
    (t &&
      console.error(
        "Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!"
      ),
    !1)
  );
}
function atcb_rewrite_html_elements(e, t = !1) {
  return (
    (e = e.replace(/<br\s*\/?>/gi, "\n")),
    (e = t
      ? e.replace(
          /\[(|\/)(url|br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]|((\|.*)\[\/url\])/gi,
          ""
        )
      : (e = e.replace(
          /\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi,
          "<$1$2>"
        )).replace(
          /\[url\]([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\[\/url\]/gi,
          function (e, t) {
            t = t.split("|");
            let a =
              '<a href="' +
              t[0] +
              '" target="' +
              atcbDefaultTarget +
              '" rel="noopener">';
            return (
              1 < t.length && "" != t[1] ? (a += t[1]) : (a += t[0]), a + "</a>"
            );
          }
        ))
  );
}
function atcb_create_modal(n, e = "", d, u, t) {
  const a = atcb_generate_bg_overlay("modal", "click"),
    c = document.createElement("div"),
    b =
      (c.classList.add("atcb-modal", "atcb-info-modal"),
      (c.tabIndex = 0),
      a.appendChild(c),
      document.body.appendChild(a),
      document.body.classList.add("atcb-modal-no-scroll"),
      document.getElementById(n.identifier)),
    l =
      (null != b && b.classList.add("atcb-active-modal"),
      document.createElement("div")),
    i =
      (l.classList.add("atcb-modal-box"),
      l.classList.add("atcb-" + n.lightMode),
      c.appendChild(l),
      atcb_set_fullsize(a),
      document.createElement("div")),
    o =
      (i.classList.add("atcb-modal-close"),
      (i.innerHTML = atcbIcon.close),
      l.appendChild(i),
      i.addEventListener(
        "click",
        atcb_debounce(() => atcb_close())
      ),
      i.addEventListener(
        "keydown",
        atcb_debounce_leading((e) => {
          "Enter" == e.key && (e.preventDefault(), atcb_close());
        })
      ),
      (null != t && 0 != t.length) || ((i.tabIndex = 0), i.focus()),
      document.createElement("div"));
  if ((o.classList.add("atcb-modal-headline"), l.appendChild(o), "" != e)) {
    const r = document.createElement("span");
    r.classList.add("atcb-modal-headline-icon"),
      (r.innerHTML = atcbIcon["" + e]),
      o.appendChild(r);
  }
  e = document.createTextNode(d);
  o.appendChild(e);
  const m = document.createElement("div");
  if (
    (m.classList.add("atcb-modal-content"),
    (m.innerHTML = u),
    l.appendChild(m),
    null != t && 0 < t.length)
  ) {
    const s = document.createElement("div");
    s.classList.add("atcb-modal-buttons"),
      l.appendChild(s),
      t.forEach((e, t) => {
        let a;
        null != e.href && "" != e.href
          ? ((a = document.createElement("a")),
            a.setAttribute("target", atcbDefaultTarget),
            a.setAttribute("href", e.href),
            a.setAttribute("rel", "noopener"))
          : ((a = document.createElement("button")),
            a.setAttribute("type", "button")),
          a.classList.add("atcb-modal-btn"),
          e.primary && a.classList.add("atcb-modal-btn-primary"),
          (null != e.label && "" != e.label) ||
            (e.label = atcb_translate_hook("Click me", n.language, n)),
          (a.textContent = e.label),
          s.appendChild(a),
          0 == t && a.focus(),
          "close" !== e.type
            ? (a.addEventListener(
                "click",
                atcb_debounce(() => atcb_close())
              ),
              a.addEventListener(
                "keydown",
                atcb_debounce((e) => {
                  "Enter" == e.key && atcb_close();
                })
              ))
            : (a.addEventListener(
                "click",
                atcb_debounce(() => atcb_close())
              ),
              a.addEventListener(
                "keydown",
                atcb_debounce_leading((e) => {
                  "Enter" == e.key && (e.preventDefault(), atcb_close());
                })
              ));
      });
  }
}
function atcb_position_list(e, t) {
  let a = !1;
  null !== e.nextElementSibling &&
    e.nextElementSibling.classList.contains("atcb-dropdown-anchor") &&
    ((e = e.nextSibling), (a = !0));
  var e = e.getBoundingClientRect(),
    n = t.getBoundingClientRect();
  !0 === a
    ? ((t.style.width = e.width + "px"),
      (t.style.top = e.top + window.scrollY + "px"),
      (t.style.left = e.left + "px"))
    : ((t.style.width = e.width + 10 + "px"),
      (t.style.top =
        e.top + e.height / 2 - n.height / 2 + window.scrollY + "px"),
      (t.style.left = e.left - 5 + "px"));
}
function atcb_set_fullsize(e) {
  (e.style.width = window.innerWidth + "px"),
    (e.style.height = window.innerHeight + 100 + "px");
}
function atcb_debounce(t, a = 200) {
  let n;
  return (...e) => {
    clearTimeout(n),
      (n = setTimeout(() => {
        t.apply(this, e);
      }, a));
  };
}
function atcb_debounce_leading(t, a = 200) {
  let n;
  return (...e) => {
    n || t.apply(this, e),
      clearTimeout(n),
      (n = setTimeout(() => {
        n = void 0;
      }, a));
  };
}
function atcb_throttle(n, c = 10) {
  let l,
    i = null,
    o = 0,
    r = (...e) => {
      (o = Date.now()), (i = null), (l = n.apply(this, e));
    };
  return (...e) => {
    var t = Date.now(),
      a = c - (t - o);
    return (
      a <= 0 || c < a
        ? (i && (clearTimeout(i), (i = null)), (o = t), (l = n.apply(this, e)))
        : (i = i || setTimeout(r, a)),
      l
    );
  };
}
function atcb_translate_hook(e, t, a) {
  var n = e.replace(/\s+/g, "").toLowerCase();
  return null != a.customLabels &&
    null != a.customLabels["" + n] &&
    "" != a.customLabels["" + n]
    ? atcb_rewrite_html_elements(a.customLabels["" + n])
    : atcb_translate(e, t);
}
function atcb_translate(e, t) {
  switch (t) {
    case "en":
    default:
      switch (e) {
        case "Add to Calendar":
          return "Add to Calendar";
        case "iCal File":
          return "iCal File";
        case "Close":
          return "Close";
        case "Close Selection":
          return "Close Selection";
        case "Click me":
          return "Click me";
        case "WebView iCal":
          return "Open your browser";
        case "WebView info description":
          return "Unfortunately, in-app browsers have problems with the way we generate the calendar file.<br>We automatically put a magical URL into your phone's clipboard.<br><ol><li><strong>Open any other browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.";
      }
      break;
    case "de":
      switch (e) {
        case "Add to Calendar":
          return "Im Kalender speichern";
        case "iCal File":
          return "iCal-Datei";
        case "Close":
          return "Schließen";
        case "Close Selection":
          return "Auswahl schließen";
        case "Click me":
          return "Klick mich";
        case "WebView iCal":
          return "Öffne deinen Browser";
        case "WebView info description":
          return "Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.<br>Wir haben automatisch eine magische URL in die Zwischenablage deines Smartphones kopiert.<br><ol><li><strong>Öffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.";
      }
  }
  return e;
}
isBrowser() &&
  (document.addEventListener(
    "keydown",
    atcb_debounce_leading((e) => {
      "Escape" === e.key && atcb_close();
    })
  ),
  window.addEventListener(
    "resize",
    atcb_throttle(() => {
      var e = document.getElementById("atcb-bgoverlay"),
        e =
          (null != e && atcb_set_fullsize(e),
          document.querySelector(".atcb-active")),
        t = document.querySelector(".atcb-dropdown");
      null != e && null != t && atcb_position_list(e, t);
    })
  )),
  isBrowser() &&
    ("loading" !== document.readyState
      ? atcb_init()
      : document.addEventListener("DOMContentLoaded", atcb_init, !1));
window.atcb_action = atcb_action;
