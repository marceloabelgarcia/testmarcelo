<?php
namespace App\Controller;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
 

/**
 * Class UserController
 * @package App\Controller
 *
 * @Route(path="/api/")
 */
class UserController
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("user", name="add_user", methods={"POST"})
     */
    public function add(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $name = $data['name'];
        $lastname = $data['lastname'];
        $status = $data['status'];
        $gender = $data['gender'];
        $birth = null;

        if (!empty($data['birth'])) {
            $birth = explode("-",$data['birth']);            
            $dateImmutable = new \DateTime();
            $dateImmutable->setDate($birth[0],$birth [1],$birth [2]);
            $dateImmutable->setTime(0,0,0);
            $birth = $dateImmutable;
            }


        if (empty($name)) {
            throw new NotFoundHttpException('Expecting mandatory parameters!');
        }

        $this->userRepository->saveUser($name, $lastname, $status, $gender, $birth);

        return new JsonResponse(['status' => 'User created!'], Response::HTTP_CREATED);
    }

    /**
     * @Route("user/{id}", name="get_one_user", methods={"GET"})
     */
    public function get($id): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['id' => $id]);

        $data = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'lastname' => $user->getLastname(),
            'status' => $user->getStatus(),
            'gender' => $user->getGender(),
            'birth' => $user->getBirth()
        ];

        return new JsonResponse($data, Response::HTTP_OK);
    }

    /**
     * @Route("users/{page}/{count}/{field}/{ord}", name="get_all_users", methods={"GET"})
     */
    public function getAll($page = -1,$count = -1,$field = 'name',$ord = 'ASC'): JsonResponse
    {          

        $sort = array($field => $ord);
    
        if ($page>-1 && $count > -1) $users = $this->userRepository->findBy([],$sort ,$count, $page * $count);
        else $users = $this->userRepository->findAll();
        $data = [];

        foreach ($users as $user) {
            $data[] = [
                'id' => $user->getId(),
                'name' => $user->getName(),
                'lastname' => $user->getLastname(),
                'status' => $user->getStatus(),
                'gender' => $user->getGender(),
                'birth' => $user->getBirth(),
            ];
        }

        $total = $this->userRepository->countBy([]);

        $info = [
        'page' => $page,
        'count' => $count,        
        'total' => $total
        ];

        $dataResults = [
        'results' => $data,
        'info' => $info
        ];

        return new JsonResponse($dataResults, Response::HTTP_OK);
    }

    /**
     * @Route("user/{id}", name="update_user", methods={"PUT"})
     */
    public function update($id, Request $request): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true);

        empty($data['name']) ? true : $user->setName($data['name']);
        empty($data['lastname']) ? true : $user->setLastname($data['lastname']);
        empty($data['status']) ? true : $user->setStatus($data['status']);
        empty($data['gender']) ? true : $user->setGender($data['gender']);

        if (!empty($data['birth'])) {
            $birth = explode("-",$data['birth']);            
            $dateImmutable = new \DateTime();
            $dateImmutable->setDate($birth[0],$birth [1],$birth [2]);
            $dateImmutable->setTime(0,0,0);
            $user->setBirth($dateImmutable);
            }

        $updatedUser = $this->userRepository->updateUser($user);

		return new JsonResponse(['status' => 'User updated!'], Response::HTTP_OK);
    }

    /**
     * @Route("user/{id}", name="delete_user", methods={"DELETE"})
     */
    public function delete($id): JsonResponse
    {
        $user = $this->userRepository->findOneBy(['id' => $id]);

        $this->userRepository->removeUser($user);

        return new JsonResponse(['status' => 'User deleted'], Response::HTTP_OK);
    }
}

?>