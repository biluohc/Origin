b:
	yarn build

s:
	yarn serve

d: 
	echo "\033[35m清理于： `TZ=UTC-8 date +"%Y-%m-%d %H:%M:%S"` \033[0m" \
	&& rm -frv docs \
	&& echo "\033[35m清理完毕于： `TZ=UTC-8 date +"%Y-%m-%d %H:%M:%S"` \033[0m" \
	&& echo "\033[35m分发于： `TZ=UTC-8 date +"%Y-%m-%d %H:%M:%S"` \033[0m" \
	&& cp -rpv dist docs \
	&& echo "\033[35m分发完毕于： `TZ=UTC-8 date +"%Y-%m-%d %H:%M:%S"` \033[0m" \


	

