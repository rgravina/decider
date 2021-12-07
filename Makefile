install:
	cd rps && npm install && cd -
	cd web && npm install && cd -

run:
	cd web && npm start

test:
	cd rps && npm test && cd -
	cd web && npm test && cd -
