const nodemailer = require("nodemailer");
let email = {
  transporter: nodemailer.createTransport({
    service: "163", // 运营商  qq邮箱 网易//
    port: "465",
    secure: true,
    auth: {
      user: "18559678857@163.com", //发送方的邮箱
      pass: "fly552010" // pop3 授权码
    }
  }),
  send: function(mail, content,callback) {
    mailOptions = {
      from: '"觅兔先生的个人博客~" <18559678857@163.com>',
      to: mail,
      subject: '觅兔先生给你发来的邮箱验证码',
      html: `<!DOCTYPE html>
      <html>
      <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <title></title>
          <meta charset="utf-8" />
      
      </head>
      <body>
          <div class="qmbox qm_con_body_content qqmail_webmail_only" id="mailContentContainer" style="">
              <style type="text/css">
                  .qmbox body {
                      margin: 0;
                      padding: 0;
                      background: #fff;
                      font-family: "Verdana, Arial, Helvetica, sans-serif";
                      font-size: 14px;
                      line-height: 24px;
                  }
      
                  .qmbox div, .qmbox p, .qmbox span, .qmbox img {
                      margin: 0;
                      padding: 0;
                  }
      
                  .qmbox img {
                      border: none;
                  }
      
                  .qmbox .contaner {
                      margin: 0 auto;
                  }
      
                  .qmbox .title {
                      margin: 0 auto;
                      background: url() #CCC repeat-x;
                      height: 30px;
                      text-align: center;
                      font-weight: bold;
                      padding-top: 12px;
                      font-size: 16px;
                  }
      
                  .qmbox .content {
                      margin: 4px;
                  }
      
                  .qmbox .biaoti {
                      padding: 6px;
                      color: #000;
                  }
      
                  .qmbox .xtop, .qmbox .xbottom {
                      display: block;
                      font-size: 1px;
                  }
      
                  .qmbox .xb1, .qmbox .xb2, .qmbox .xb3, .qmbox .xb4 {
                      display: block;
                      overflow: hidden;
                  }
      
                  .qmbox .xb1, .qmbox .xb2, .qmbox .xb3 {
                      height: 1px;
                  }
      
                  .qmbox .xb2, .qmbox .xb3, .qmbox .xb4 {
                      border-left: 1px solid #BCBCBC;
                      border-right: 1px solid #BCBCBC;
                  }
      
                  .qmbox .xb1 {
                      margin: 0 5px;
                      background: #BCBCBC;
                  }
      
                  .qmbox .xb2 {
                      margin: 0 3px;
                      border-width: 0 2px;
                  }
      
                  .qmbox .xb3 {
                      margin: 0 2px;
                  }
      
                  .qmbox .xb4 {
                      height: 2px;
                      margin: 0 1px;
                  }
      
                  .qmbox .xboxcontent {
                      display: block;
                      border: 0 solid #BCBCBC;
                      border-width: 0 1px;
                  }
      
                  .qmbox .line {
                      margin-top: 6px;
                      border-top: 1px dashed #B9B9B9;
                      padding: 4px;
                  }
      
                  .qmbox .neirong {
                      padding: 6px;
                      color: #666666;
                  }
      
                  .qmbox .foot {
                      padding: 6px;
                      color: #777;
                  }
      
                  .qmbox .font_darkblue {
                      color: #006699;
                      font-weight: bold;
                  }
      
                  .qmbox .font_lightblue {
                      color: #008BD1;
                      font-weight: bold;
                  }
      
                  .qmbox .font_gray {
                      color: #888;
                      font-size: 12px;
                  }
              </style>
              <div class="contaner">
                  <div class="title">觅兔先生个人博客邮箱验证</div>
                  <div class="content">
                      <p class="biaoti"><b>亲爱的用户，你好！</b></p>
                      <b class="xtop"><b class="xb1"></b><b class="xb2"></b><b class="xb3"></b><b class="xb4"></b></b>
                      <div class="xboxcontent">
                          <div class="neirong">
                              <p><b>请核对你的用户名完后,填写邮箱验证码进行验证</b></p>
                              <p><b>验证邮箱的验证码：</b><span class="font_lightblue"><span id="yzm" data="${content}" onclick="return false;" t="7" style="border-bottom: 1px dashed rgb(204, 204, 204); z-index: 1; position: static;">${content}</span></span><br><span class="font_gray">(请输入该验证码完成验证邮箱，验证码30分钟内有效！)</span></p>
                              <div class="line">如果你未申请验证邮箱服务，请忽略该邮件。</div>
                          </div>
                      </div>
                      <b class="xbottom"><b class="xb4"></b><b class="xb3"></b><b class="xb2"></b><b class="xb1"></b></b>
                      
                  </div>
              </div>
              <style type="text/css">
                  .qmbox style, .qmbox script, .qmbox head, .qmbox link, .qmbox meta {
                      display: none !important;
                  }
              </style>
          </div>
      </body>
      </html>`
    };
    this.transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info);
      callback();
    });
  }
};
module.exports = email;