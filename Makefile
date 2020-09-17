start: dev

dev: 
	@cd backend && yarn start && cd ../frontend && yarn start

frontend-start:
	@cd frontend && yarn start

backend-start:
	@cd backend && yarn start

project-start:
	@cd frontend && yarn start && cd .. && cd backend && yarn start