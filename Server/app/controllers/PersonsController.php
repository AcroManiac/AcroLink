<?php

use Phalcon\Http\Response;

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
}
