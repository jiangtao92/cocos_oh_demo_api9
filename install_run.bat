set tool=D:\openharmony_SDK\toolchains\3.2.2.5\hdc_std.exe
set pack_local_path=C:\Users\pp\Desktop\cocos_oh_demo_api9\entry\build\default\outputs\default\entry-default-signed.hap

%tool% uninstall %pack_name%
%tool% install -r %pack_local_path%

%tool% shell aa start -a com.example.entry.MainAbility  -b  ohos.example.myapplication

%tool% hilog -r > ./log.txt