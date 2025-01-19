import { Injectable } from "@nestjs/common";

@Injectable()
/*Başka yere eklenebilir Enjekte edilebilir yani */
export class UserService{
    /* sadece bu class içinden erişiliyo buna */
    private readonly users = [
        {
            id:"1",
            username:"Beyza",
            age:22
        },
        {
            id:"2",
            username:"Ayşe",
            age:23
        },
        {
            id:"3",
            username:"Fatma",
            age:24
        }
    ]

    findAll() {
        /* komple yukardaki array dönder diyo */
        return this.users;
    }
}