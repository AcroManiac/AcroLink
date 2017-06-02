<?php

use Phalcon\Http\Response;
use Phalcon\Mvc\Model\Query;

class PersonsController extends ControllerBase
{
    /**
     * Index action
     */
    public function indexAction()
    {
    }

    /**
     * Searches for Persons
     */
    public function searchAction()
    {
        $this->flash->notice("In search");

        $response = new Response();

        if ($this->request->isGet()) {
            $id = $this->dispatcher->getParam("id");

            $this->flash->notice("Param id = " . $id);

            $person = Persons::findFirstById($id);
            if ($person) {
                
                $response->setStatusCode(200, "OK");
                $response->setJsonContent(
                    [
                        "status" => "OK",
                        "data"   => $person,
                    ]
                );

            } else {
                $this->flash->error("Person does not exist " . $id);

                $response->setStatusCode(409, "Conflict");
                $response->setJsonContent(
                    [
                        "status"   => "ERROR",
                        "messages" => "Person id = $id does not exist"
                    ]
                );
            }
        }
        else
        {
            $this->flash->error("This is not GET request");
        }

        return $response;
    }

    public function listAction()
    {
        // $this->flash->notice("In List Action");

        // $response = new Response();

        $content_type = 'application/json';
        $status = 200;
        $description = 'OK';
        $response = $app->response;

        $status_header = 'HTTP/1.1 ' . $status . ' ' . $description;
        $response->setRawHeader($status_header);
        $response->setStatusCode($status, $description);
        $response->setContentType($content_type, 'UTF-8');
        $response->setHeader('Access-Control-Allow-Origin', '*');
        $response->setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
        $response->setHeader('Access-Control-Allow-Headers', 'Authorization');
        $response->setHeader('Content-type', $content_type);
        $response->sendHeaders();

        if ($this->request->isGet()) {
            $limit = $this->dispatcher->getParam("limit");
            // $this->flash->notice("Limit=" . $limit);

            $query = $this->modelsManager->createQuery(
                "SELECT * FROM Persons " .
                    "INNER JOIN Images " .
                    "INNER JOIN Countries " .
                    "INNER JOIN Statuses " .
                    "INNER JOIN PersonLevels " .
                "LIMIT $limit");

            $persons = $query->execute();
            if ($persons) {
                
                $response->setStatusCode(200, "OK");
                $response->setJsonContent(
                    [
                        "status" => "OK",
                        // "results"   => $persons,
                    ]
                );

            } else {
                $this->flash->error("No persons in database");

                $response->setStatusCode(409, "Conflict");
                $response->setJsonContent(
                    [
                        "status"   => "ERROR",
                        "messages" => "No persons in database"
                    ]
                );
            }
        }
        else
        {
            $this->flash->error("This is not GET request");
        }

        return $response;
    }
}
