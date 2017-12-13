import { UserModel } from './user.model';
import { LocationModel } from './location.model';

export class ProfileModel extends UserModel {
 
  public id: number;
  public phone?: string;
  public birth_date?: string;
  public practice_start_date?: string;
  public bio?: string;
  public avatar?: string;
  public score?: number;

  public first_name?: string;
  public last_name?: string;

  public level_id?: number;
  public position_id?: number;
  public role_id: number;

  public location: LocationModel;

  fillData(data: any) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.username = data.username;
    this.email = data.email;

    this.id = data.profile.id;
    this.phone = data.profile.phone;
    this.birth_date = data.profile.birth_date;
    this.practice_start_date = data.profile.practice_start_date;
    this.bio = data.profile.bio;
    this.avatar = data.profile.avatar;
    this.score = data.profile.score;

    this.location = data.location;
  }
   
}

/*
	user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
	phone = models.TextField(max_length=20, blank=True)
	birth_date = models.DateField(null=True, blank=True)
	practice_start_date = models.DateField(null=True, blank=True)
	bio = models.TextField(max_length=500, blank=True)
	location = models.CharField(max_length=30, blank=True)
	avatar = models.ImageField(upload_to='avatars/', null=True)
	score = models.IntegerField(null=False, blank=False, default=0)

	level = models.ForeignKey('reference.Level', null=True)
	country = models.ForeignKey('reference.Country', null=True)

	position = models.ManyToManyField('reference.Position')
	role = models.ManyToManyField('reference.Role')
	social_network = models.ManyToManyField('reference.SocialNetwork', through='main.SocialNetworkLink')
*/
