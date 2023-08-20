import { describe, before, it, after } from "node:test";
import { strictEqual } from "node:assert";
import { http, ExpressRequest, ExpressResponse } from "@codeplaydata/adapters";
import { Practitioner } from "./core/admin/Practitioner.js";
import { Schedule } from "./core/workflow/availability/Schedule.js";

describe('Teste da API FHIR com...', () => {
    
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [ practitioner ]
    });

    const sheduleRoute = http.server.express.route('get', `/${schedule.resourceType.toLowerCase()}`, async (req: ExpressRequest, res: ExpressResponse) => {
        res.json('schedule route ok')
    });

    const router = http.server.express.router();
    router.add(sheduleRoute);

    let server = http.server.express.server(router).app
    let serverApp = server.listen(3000);
    
    before(async () => {
        await new Promise(resolve => {
            serverApp.once('listening', resolve);
        });
    });

    it('a rota para Schedule.', async () => {
        const response = await fetch('http://127.0.0.1:3000/schedule')
        strictEqual(await response.json(), "schedule route ok");
    });

    after(() => {
        serverApp.close();
    });

});