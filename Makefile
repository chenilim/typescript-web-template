.PHONY: all packdev pack prebuild clean cleanall

all: clean prebuild pack

packdev:
	rm -rf pack
	npm run packdev

pack:
	rm -rf pack
	npm run pack

prebuild:
	echo Make sure to run this from git-bash on Windows, not Ubuntu WSL
	# npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
	# npm install ./private/*.tgz
	npm install

clean:
	rm -rf pack

cleanall: clean
	rm -rf node_modules
