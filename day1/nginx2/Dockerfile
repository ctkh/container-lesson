#ベースイメージを指定します。今回はCentOS 7
FROM centos:7

#LABELは、コンテナイメージにメタ情報を付与します。
#key=value形式で設定します。複数も可です。
LABEL maintainer="K.H <mail@hogehoge.fuga>"
LABEL subject="Container Training"

#nginxをyumインストールするためのリポジトリ設定。
#事前にホスト側で用意し、コンテナ内へコピーします。
COPY nginx.repo /etc/yum.repos.d/

#RUNは、コンテナイメージのビルド時に実行するコマンドです。
#yumでnginxをインストールしています。
RUN yum install -y nginx

#WORKDIRは、Dockerfileのコマンド実行する際の作業用ディレクトリを指定します。
#なければ作成します。
WORKDIR /usr/share/nginx/html

#index.htmlをコンテナ内にコピーします。
#WORKDIRコマンドで指定したディレクトリにコピーすることになります。
COPY index.html .

#CMDは、コンテナの起動時に実行するコマンドです。
#nginxを起動するコマンドを記載します。
CMD ["nginx", "-g", "daemon off;"]

#RUNはイメージのビルド(作成)時、CMDはコンテナの起動時　です。

#EXPOSEは、コンテナがListenするポートを指定します。
#nginxがデフォルトで80を利用する設定となっているため、それを指定します。
EXPOSE 80


### その他

### ADD
# COPYと似たコマンドで、ADDがあります。どちらもイメージ内にファイルをコピーすることができますが、
# ADDは、リモートファイルの取得が可能です。またコピー時に、圧縮済ファイルを解凍します。

# ADD http://ftp.tsukuba.wide.ad.jp/software/apache/tomcat/tomcat-9/v9.0.24/bin/apache-tomcat-9.0.24.tar.gz /opt

# これでインターネット上のTomcatのtarボールを取得し、/optに解凍して配置します

### USER
# コンテナの実行ユーザを指定します。
# USER root

### ENV
# イメージ内に環境変数を設定します。プロセスに環境変数経由で値を渡すときなどに利用できます。
# ENV key=value